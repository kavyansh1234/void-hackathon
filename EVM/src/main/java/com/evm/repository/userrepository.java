package com.evm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evm.model.user;

public interface userrepository extends JpaRepository<user,Integer> {

}
