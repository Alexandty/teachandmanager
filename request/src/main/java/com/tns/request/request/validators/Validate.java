package com.tns.request.request.validators;

import org.springframework.stereotype.Service;

import com.tns.request.request.model.User;

@Service
public class Validate {

	private static final int MIN_LENGTH = 8;
	private static final int MAX_LENGTH = 20;

	public boolean user(User user) {
		
		return correctLength(user.getPassword()) && correctLength(user.getUsername());
	}

	private boolean correctLength(String text) {
		return minimun(text) && maximun(text);
	}

	private boolean maximun(String text) {
		return text.length()<=MAX_LENGTH;
	}

	private boolean minimun(String text) {
		return text.length()>=MIN_LENGTH;
	}

}
