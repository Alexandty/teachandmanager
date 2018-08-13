package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.dto.PersonDTO;
import com.tns.request.request.model.Person;
import com.tns.request.request.repository.IPersonRepository;

@Service
public class PersonBusiness {

	@Autowired
	IPersonRepository personRepository;

	public PersonDTO getPerson(String username) {
		return buildPersonDTO(personRepository.findByUserIdUsername(username));
	}

	public PersonDTO buildPersonDTO(Person person) {
		PersonDTO personDTO = new PersonDTO(person.getName(), person.getLastName(), person.getEntryDate(),
				person.getRol());
		personDTO.setUser(person.getUserId().getUsername());
		return personDTO;
	}
}