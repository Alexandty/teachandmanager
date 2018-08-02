package com.tns.request.request.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.MailService;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/mail")
@RestController
public class SendMailController {

    @Autowired
    private MailService mailService;

    @GetMapping("/")
    public String index(){
        return "send_mail_view";
    }

    @PostMapping("/sendMail")
    public String sendMail(){

       
        mailService.sendMail();

        return "send_mail_view";
    }
}