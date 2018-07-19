package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;

import com.tns.request.request.model.Person;
import com.tns.request.request.repository.IPersonRepository;

public class PersonBusiness {

	@Autowired
	IPersonRepository personRepository;

	public Person getPerson(Long id) {
		return personRepository.findByUserIdIdUser(id);
	}

}
