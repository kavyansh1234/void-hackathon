package com.evm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.evm.model.user;
import com.evm.repository.userrepository;
@Service
public class userserviceimple implements userservice {

	userrepository ures;
	
	public userserviceimple(userrepository ures) {
		super();
		this.ures = ures;
	}

	@Override
	public user checkvoter(user ur) {
		
		// TODO Auto-generated method stub
		return ures.findById(ur.getVoterid()).get();
	}

	
}
