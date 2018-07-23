package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.Person;
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
		if (validate.user(user)) {
			User userBD = userRepository.findByUsername(user.getUsername().toLowerCase());
			if (null == userBD) {
				throw new BusinessException("Nombre de usuario o contraseña incorrecto");
			} else {
				if (user.getPassword().equals(userBD.getPassword())) {
					System.out.println("User Found");
					return userBD;
				}
			}
		}
		throw new BusinessException("Nombre de usuario o contraseña incorrecto");
	}

	public Person getPerson(User user) {
		User userBD = getUser(user);
		if (userBD != null)
			return personBusiness.getPerson(userBD.getIdUser());
		// TODO: Person not found
		throw new BusinessException("Nombre de usuario o contraseña incorrecto");
	}
}
