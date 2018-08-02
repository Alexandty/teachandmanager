package com.tns.request.request.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail() {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setFrom("alexander.marquez@techandsolve.com");
        mail.setTo("alexamarmir@gmail.com");
        mail.setSubject("Hola Gmail");
        mail.setText("Esté es mi primer mensaje enviado por gmail Gracias Tech");

        javaMailSender.send(mail);
    }
}