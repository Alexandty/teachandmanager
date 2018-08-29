package com.tns.request.request.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;

@Component
public class UtilEmail {

	@Autowired
	private JavaMailSender javaMailSender;

	public UtilEmail() {
		super();
	}

	public void sendNotification(SimpleMailMessage mail) {
		javaMailSender.send(mail);
	}

}
