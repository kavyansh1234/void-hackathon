package com.evm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class email {

	@Id
	@GeneratedValue
	int eid;
	//String fromuser;
	String touser;
	String subject;
	String body;
	@Override
	public String toString() {
		return "email [eid=" + eid + ", touser=" + touser + ", subject=" + subject + ", body=" + body + "]";
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getTouser() {
		return touser;
	}
	public void setTouser(String touser) {
		this.touser = touser;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public email(int eid, String touser, String subject, String body) {
		super();
		this.eid = eid;
		this.touser = touser;
		this.subject = subject;
		this.body = body;
	}
	public email() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
