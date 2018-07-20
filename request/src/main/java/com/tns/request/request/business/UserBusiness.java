package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.exception.BusinessExcepcion;
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
				// TODO: Que hacer en caso de no encontrar el usuario
			} else {
				if (user.getPassword().equals(userBD.getPassword())) {
					//TODO: modificar test antes de modificar funcionalidad
					System.out.println("user Found");
					return userBD;
				}
			}
		}
		return null;
	}

	public Person getPerson(User user) {
		User userBD = getUser(user);
		if(userBD != null)
			return personBusiness.getPerson(userBD.getIdUser());
		throw new BusinessExcepcion("Nombre de usuario o contraseña");
	}

}
