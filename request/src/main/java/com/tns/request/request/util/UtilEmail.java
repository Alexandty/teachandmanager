package com.tns.request.request.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class UtilEmail {

	@Autowired
	private JavaMailSender javaMailSender;

	public UtilEmail() {
		super();
	}

	public void sendNotification(String estado, String motivo, String email) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(email);
		mail.setSubject("Actualización de solicitud");
		mail.setText("Solicitud actualizada a " + estado + " , porque " + motivo);
		javaMailSender.send(mail);
	}
}
