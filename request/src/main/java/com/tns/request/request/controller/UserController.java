package com.tns.request.request.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.UserBusiness;
import com.tns.request.request.model.User;
import com.tns.request.request.repository.IUserRepository;

@RestController
@RequestMapping("/login")
public class UserController {

//	@Autowired
//	private IUserRepository userRepository;
//	
//	@Autowired
//	private UserBusiness userBusiness;

//	@GetMapping("/get/user")
//	public User getUser(@RequestHeader User user) {
//		// userName = "usernametest";
//		System.out.println("In getuser " + user.getUsername()+" "+user);
//		return userRepository.findByUsername(user.getUsername());
//	}
	
	@RequestMapping("/getUser")
	public User getUser(@RequestBody User user) {
		// userName = "usernametest";S
		//return userBusiness.getUser(user);
		System.out.println(user.getUsername());
		return user;
	}
	
//	@GetMapping("/get/leader")
//	public User getUser(@RequestHeader User user) {
//		// userName = "usernametest";
//		System.out.println("In getuser " + user.getUsername()+" "+user);
//		return userRepository.findByUsername(user.getUsername());
//	}

}
