package com.tns.request.request.repository;

import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.User;

public interface IUserRepository extends CrudRepository<User, Long> {
	
	public abstract User findByUsername(String username);
		
}
