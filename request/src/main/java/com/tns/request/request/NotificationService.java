package com.tns.request.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService (JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendMail() {
		SimpleMailMessage mail = new SimpleMailMessage();
		
		mail.setTo("mateo.betancur@techandsolve.com");
		mail.setFrom("mateobetancurgrisales@gmail.com");
		mail.setSubject("Notification test");
		mail.setText("This is a notiTest");
		
		javaMailSender.send(mail);
	}
}
