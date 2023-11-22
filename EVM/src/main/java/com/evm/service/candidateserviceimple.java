package com.evm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.evm.model.candidate;
import com.evm.model.user;
import com.evm.repository.canddiaterepository;
import com.evm.repository.userrepository;
@Service
public class candidateserviceimple implements candidateservice {

	canddiaterepository cres;
	
	public candidateserviceimple(canddiaterepository cres) {
		super();
		this.cres = cres;
	}

	@Override
	public List<candidate> getallcanadidatedata() {
		List<candidate> lt= cres.findAll();
		
		// TODO Auto-generated method stub
		return lt;
	}

	@Override
	public int countincrement(int cid) {
		candidate cand= cres.findById(cid).get();
		System.out.println(cand);
		cand.setCid(cand.getCid()+1);
		System.out.println(cand);
		// TODO Auto-generated method stub
		return 0;
	}

	
}
