package com.evm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evm.model.candidate;
import com.evm.model.user;

public interface canddiaterepository extends JpaRepository<candidate,Integer> {

}
