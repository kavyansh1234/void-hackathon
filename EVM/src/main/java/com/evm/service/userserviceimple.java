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
	public String userregistration(user ur) {
		ures.save(ur);
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public user getuserdata(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int userlogin(user ur) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<user> getalluserdata() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int checkaadharandvoter(user ur) {
		// TODO Auto-generated method stub
		return 0;
	}

}
