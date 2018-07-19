package com.tns.request.request.repository;

import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
}
