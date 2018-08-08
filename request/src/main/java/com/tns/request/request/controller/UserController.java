package com.tns.request.request.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.UserBusiness;
import com.tns.request.request.dto.PersonDTO;
import com.tns.request.request.model.User;

@RestController
@RequestMapping("/login")
public class UserController {

	@Autowired
	private UserBusiness userBusiness;

	@ResponseBody
	@RequestMapping("/get/person")
	public PersonDTO getPerson(@RequestBody User user) {
		return userBusiness.getPerson(user);
	}

}
