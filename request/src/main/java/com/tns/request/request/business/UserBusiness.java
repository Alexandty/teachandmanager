package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;

import com.tns.request.request.model.User;
import com.tns.request.request.repository.IUserRepository;
import com.tns.request.request.validators.Validate;

public class UserBusiness {
	
	@Autowired
	private Validate validate;
	
	@Autowired
	private IUserRepository userRepository;

	public User getUser(User user) {
		if(validate.user(user)) {
			User userBD = userRepository.findByUsername(user.getUsername().toLowerCase());
			if(null == userBD) {
				//TODO: Que hacer en caso de no encontrar el usuario
			}else {
				if(user.getPassword().equals(userBD.getPassword())) {
					userRepository.save(user);
					return userBD;
				}
			}
		}
		return null;
	}

}
