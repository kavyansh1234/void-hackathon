package com.evm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class user {

	@Id
	String voterid;
	int wardno;
	String name;
	String email;
	
	
	public String getVoterid() {
		return voterid;
	}

	public void setVoterid(String voterid) {
		this.voterid = voterid;
	}

	public int getWardno() {
		return wardno;
	}

	public void setWardno(int wardno) {
		this.wardno = wardno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "user voterid=" + voterid + ", wardno=" + wardno + ", name=" + name + ", email="
				+ email + "]";
	}

	public user(String voterid, int wardno, String name, String email) {
		super();
		this.voterid = voterid;
		this.wardno = wardno;
		this.name = name;
		this.email = email;
	}

	public user() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}

	