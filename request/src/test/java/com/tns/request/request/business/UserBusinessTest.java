package com.tns.request.request.business;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.User;
import com.tns.request.request.repository.IUserRepository;
import com.tns.request.request.validators.Validate;

@RunWith(MockitoJUnitRunner.class)
public class UserBusinessTest {

	@InjectMocks
	private UserBusiness userBusiness;

	@Mock
	private Validate validate;

	@Mock
	private IUserRepository userRepository;

	@Test
	public void debeRetornarUsuarioCorrecto() {
		User user = new User();
		user.setUsername("juan");
		user.setPassword("123");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("123");
		when(validate.user(user)).thenReturn(true);
		when(validate.specialCharacters(user.getPassword())).thenReturn(true);
		when(validate.specialCharacters(user.getUsername())).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		Assert.assertNotNull(userBusiness.getUser(user));

	}

	@Test
	public void noDebeSerKeySensitiveParaNombreUsuario() {
		User user = new User();
		user.setUsername("juaN");
		user.setPassword("juan");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("juan");

		when(validate.user(user)).thenReturn(true);
		when(validate.specialCharacters(user.getPassword())).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		userBusiness.getUser(user);
		Assert.assertNotNull(userBusiness.getUser(user));

	}

	@Test(expected = BusinessException.class)
	public void debeLanzarExcepcionConUsuarioNoValido() {
		User user = new User();
		when(validate.user(user)).thenReturn(false);
		userBusiness.getUser(user);

	}

	@Test(expected = BusinessException.class)
	public void debeValidarPassKeySesitive() {
		User user = new User();
		user.setUsername("juan");
		user.setPassword("juaN");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("juan");

		when(validate.user(user)).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		userBusiness.getUser(user);

	}

}
