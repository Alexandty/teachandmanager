package com.tns.request.request.validators;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.tns.request.request.model.User;

public class ValidateTest {
	
	private static final String PASSWORD_VALIDO = "12345678";

	private static final String PASSWORD_INVALIDO = "123456";

	private static final String PASSWORD_MAX_INVALIDO = "1234567890000000000000";

	private static final String USER_VALIDO = "12345678";

	private static final String USER_MAX_INVALIDO = "1234567890000000000000";
	
	private Validate validate;
	
	@Before
	public void init() {
		validate = new Validate();
	}
	

	@Test
	public void passDebeTenerMinimo8Caracteres() {
		Assert.assertTrue(validate.user(getUser(USER_VALIDO, PASSWORD_VALIDO)));
	}
	
	@Test
	public void passDebeFallarConMenosDe8Caracteres() {
		//Arrange
		User user = new User();
		user.setPassword(PASSWORD_INVALIDO);
		
		//Act
		boolean isValid = validate.user(user);
		//Assert
		Assert.assertFalse(isValid);
		
	}
	
	@Test
	public void userDebeFallarMasDe20Caracteres() {
		Assert.assertFalse(validate.user(getUser(USER_MAX_INVALIDO, PASSWORD_VALIDO)));
	}
	
	@Test
	public void passDebeFallarConMenosDe8Caracteres2() {
		//Arrange
		User user = new User();
		user.setPassword("         1234567 ");
		
		//Act
		boolean isValid = validate.user(user);
		//Assert
		Assert.assertFalse(isValid);
		
	}
	
	@Test
	public void passDebeTenerMaximo20Caracteres() {
		Assert.assertTrue(validate.user(getUser(USER_VALIDO, PASSWORD_VALIDO)));
	}
	
	@Test
	public void passDebeFallarMasDe20Caracteres() {
		//Arrange
		User user = new User();
		user.setPassword(PASSWORD_MAX_INVALIDO);
		
		//Act
		boolean isValid = validate.user(user);
		//Assert
		Assert.assertFalse(isValid);
		
	}
	
	private User getUser(String username, String pass) {
		User user = new User();
		user.setUsername(username);
		user.setPassword(pass);
		return user;
	}

}
