package com.evm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evm.model.candidate;
import com.evm.model.email;
import com.evm.model.user;
import com.evm.service.candidateservice;
import com.evm.service.emailservice;
import com.evm.service.userservice;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
@RequestMapping("/api/candidate")


public class candidatecontroller {
candidateservice ures;	

	
	public candidatecontroller(candidateservice uservice) {
	super();
	this.ures = uservice;
}


@RequestMapping("getall")
@GetMapping	
	public List<candidate> getallcandidate()
	{int x=0;
	List<candidate> lt=ures.getallcanadidatedata();
	//System.out.println(ur);
		return lt;
	}
	@RequestMapping(path = "vote")
	@PostMapping
	 public int countincre(@RequestBody candidate cs )
 {
	
		//System.out.println(ures.countincrement());
		
	return 0;
 }
	
	
	
	


//	@RequestMapping(path = "registration")
//	@PostMapping
//	public int userregistration(@RequestBody user ur)
//	{
//		//int x=uservice.checkaadharandvoter(ur);
//		int x=1;
//		if(x==0)
//		{
//			//return 0;
//		}
//		else if(x==1)
//		{
//			
//			email em=new email();
//			em.setTouser(ur.getEmail());
//			em.setBody("1234");
//			em.setSubject("Check");
//			ems.otp(em);
//			uservice.userregistration(ur);
//			//return 1;
//		}
//		else if(x==2)
//		{
//			uservice.userregistration(ur);
//			//return 1;
//		}
//		System.out.println(ur);
//		return x;
//	}
//	@RequestMapping(path = "login")
//	@PostMapping
//	public int userlogin(@RequestBody user ur,HttpServletRequest request, HttpSession session)
//	{
//		System.out.println(ur);
//		if(uservice.userlogin(ur)==1)
//		{
//			session.invalidate();
//			HttpSession hs=request.getSession(true);
//			hs.setAttribute("user",2);
//			hs.setAttribute("data", ur);
//		}
//		return uservice.userlogin(ur);
//	}
//	
//	
//	@GetMapping("{uid}")
//	public user getdetails(@PathVariable("uid") int uid )
//	{
//		return uservice.getuserdata(uid);
//	}
//	@GetMapping
//	public  List<user> getdetails()
//	{
//		return uservice.getalluserdata();
//	}

}
