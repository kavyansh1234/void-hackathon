package com.evm.service;

import java.util.List;

import com.evm.model.candidate;
import com.evm.model.user;
//import com.void_hacks.web.model.userregistration;

public interface candidateservice {
	//public user checkvoter(user ur);
	//public String userregistration(user ur);
	//public user getuserdata(int id);
	//public int userlogin(user ur);
	public List<candidate> getallcanadidatedata();
	public int countincrement(int cid);
	

}
