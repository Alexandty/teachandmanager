package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.model.Person;
import com.tns.request.request.repository.IPersonRepository;

@Service
public class PersonBusiness {

	@Autowired
	IPersonRepository personRepository;

	public Person getPerson(Long id) {
		return personRepository.findByUserIdIdUser(id);
	}

}
