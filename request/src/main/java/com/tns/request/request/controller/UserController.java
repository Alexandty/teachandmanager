package com.tns.request.request.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.UserBusiness;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.User;

@RestController
@RequestMapping("/login")
public class UserController {

	@Autowired
	private UserBusiness userBusiness;

//	@RequestMapping("/get/user")
//	public User getUser(@RequestBody User user) {
//		System.out.println("In getuser " + user.getUsername());
//		
//		return userBusiness.getUser(user);
//	}
	@ResponseBody
	@RequestMapping("/get/person")
	public Person getPerson(@RequestBody User user) {
		System.out.println("In get user controller" + user.getUsername());
		return userBusiness.getPerson(user);
	}

	// @RequestMapping("/getUser")
	// public User getUser(@RequestBody User user) {
	// // userName = "usernametest";S
	// //return userBusiness.getUser(user);
	// System.out.println(user.getUsername());
	// return user;
	// }

}
