package com.evm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evm.model.email;
import com.evm.model.user;

public interface emailrepository extends JpaRepository<email,Integer> {

}
