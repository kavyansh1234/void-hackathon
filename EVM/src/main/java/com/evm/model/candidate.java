package com.evm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class candidate {
	@Id
	@GeneratedValue
	int cid;
	String name;
	String party;
	String sybmol;
	String wardno;
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParty() {
		return party;
	}
	public void setParty(String party) {
		this.party = party;
	}
	public String getSybmol() {
		return sybmol;
	}
	public void setSybmol(String sybmol) {
		this.sybmol = sybmol;
	}
	public String getWardno() {
		return wardno;
	}
	public void setWardno(String wardno) {
		this.wardno = wardno;
	}
	public candidate() {
		super();
		// TODO Auto-generated constructor stub
	}
	public candidate(int cid, String name, String party, String sybmol, String wardno) {
		super();
		this.cid = cid;
		this.name = name;
		this.party = party;
		this.sybmol = sybmol;
		this.wardno = wardno;
	}
	@Override
	public String toString() {
		return "candidate [cid=" + cid + ", name=" + name + ", party=" + party + ", sybmol=" + sybmol + ", wardno="
				+ wardno + "]";
	}
	

}
