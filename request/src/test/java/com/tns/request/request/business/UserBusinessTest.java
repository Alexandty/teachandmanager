package com.tns.request.request.business;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyZeroInteractions;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.tns.request.request.model.User;
import com.tns.request.request.repository.IUserRepository;
import com.tns.request.request.validators.Validate;

@SuppressWarnings("deprecation")
@RunWith(MockitoJUnitRunner.class)
public class UserBusinessTest {

	@InjectMocks
	private UserBusiness userBusiness;

	@Mock
	private Validate validate;

	@Mock
	private IUserRepository userRepository;

	@Test
	public void test() {
		User user = new User();
		user.setUsername("juan");
		user.setPassword("123");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("123");

		when(validate.user(user)).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		Assert.assertNotNull(userBusiness.getUser(user));

	}

	@Test
	public void test2() {
		User user = new User();
		user.setUsername("juan");
		user.setPassword("juan");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("juan");

		when(validate.user(user)).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		userBusiness.getUser(user);
		verify(userRepository).save(user);

	}

	@Test
	public void test3() {
		User user = new User();
		when(validate.user(user)).thenReturn(false);
		userBusiness.getUser(user);
		verifyZeroInteractions(userRepository);

	}

	@Test
	public void test4() {
		User user = new User();
		user.setUsername("juan");
		user.setPassword("juaN");
		User userBD = new User();
		userBD.setUsername("juan");
		userBD.setPassword("juan");

		when(validate.user(user)).thenReturn(true);
		when(userRepository.findByUsername(user.getUsername())).thenReturn(userBD);
		Assert.assertNull(userBusiness.getUser(user));

	}

}
