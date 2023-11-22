package com.evm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.evm.model.email;
import com.evm.model.user;
import com.evm.repository.emailrepository;
import com.evm.repository.userrepository;
@Service
public class emailserviceimple implements emailservice {

	@Autowired
	private JavaMailSender mailsender;

	
	@Override
	public String otp(email em) {
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setFrom("yashjain200502@gmail.com");
		msg.setTo(em.getTouser());
		msg.setText(em.getBody());
		msg.setSubject(em.getSubject());
		mailsender.send(msg);
		System.out.println("mail sent successsfully");
		// TODO Auto-generated method stub
		return "mail sent successsfully";
	}
	

	

}
