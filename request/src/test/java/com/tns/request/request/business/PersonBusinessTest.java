package com.tns.request.request.business;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyBoolean;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.notNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.tns.request.request.dto.PersonDTO;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.User;
import com.tns.request.request.repository.IPersonRepository;

@RunWith(MockitoJUnitRunner.class)
public class PersonBusinessTest {

	@InjectMocks
	private PersonBusiness personBusiness;

	@Mock
	private IPersonRepository personRepository;

	@Test
	public void debeCopiarSatisfactoriamentePersonAPersonDTO() {
		Person person = new Person();
		person.setName("Alexander");
		person.setLastName("Alexander");
		person.setIdPerson(1);
		person.setUserId(new User());
		person.getUserId().setUsername("user");
		PersonDTO personDTO = personBusiness.buildPersonDTO(person);
		Assert.assertTrue(person.getName().equals(personDTO.getName()));
	}
}
