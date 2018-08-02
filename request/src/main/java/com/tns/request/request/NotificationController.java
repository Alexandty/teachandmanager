package com.tns.request.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController {
	
	@Autowired
	private NotificationService notificationservice;
	
	@RequestMapping("/checking")
	public String checker() {
		return "Check";
	}
	
	@RequestMapping("/notification")
	public String sendMail() {
		notificationservice.sendMail();
		return "Mail Sent";
	}
	
}
