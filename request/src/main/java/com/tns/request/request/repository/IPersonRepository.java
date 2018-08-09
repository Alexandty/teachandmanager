package com.tns.request.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.Person;

public interface IPersonRepository extends CrudRepository<Person, Long>  {

	Person findByUserIdUsername(String username);

}
