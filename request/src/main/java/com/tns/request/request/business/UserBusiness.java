package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.dto.PersonDTO;
import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.User;
import com.tns.request.request.repository.IUserRepository;
import com.tns.request.request.validators.Validate;

@Service
public class UserBusiness {

	@Autowired
	private Validate validate;

	@Autowired
	private IUserRepository userRepository;

	@Autowired
	private PersonBusiness personBusiness;

	public User getUser(User user) {
		if (validate.user(user) && validate.specialCharacters(user.getPassword())
				&& validate.specialCharacters(user.getUsername())) {
			User userBD = userRepository.findByUsername(user.getUsername());
			if (null == userBD) {
				throw new BusinessException("No existe el usuario");
			} else if (user.getPassword().equals(userBD.getPassword())) {
				return userBD;
			}
		}
		throw new BusinessException("Nombre de usuario o contraseña incorrecto");
	}

	public PersonDTO getPerson(User user) {
		User userBD = getUser(user);
		return personBusiness.getPerson(userBD.getUsername());
	}
}
