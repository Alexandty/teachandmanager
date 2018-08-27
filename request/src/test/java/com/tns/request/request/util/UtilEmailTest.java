package com.tns.request.request.util;

import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.mail.javamail.JavaMailSender;

@RunWith(MockitoJUnitRunner.class)
public class UtilEmailTest {

	@InjectMocks
	private UtilEmail utilEmail;

	@Mock
	private JavaMailSender javaMailSender;

	@Test
	public void debeEnviarSolicitudDeCorreo() {
		String var = anyString();
		utilEmail.sendNotification(var, var, var);
		// verify(javaMailSender).sendNotification(anyString(), anyString(),
		// anyString());
	}

}
