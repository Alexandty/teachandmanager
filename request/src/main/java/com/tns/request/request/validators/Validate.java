package com.tns.request.request.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
		return minimum(text) && maximum(text);
	}

	private boolean maximum(String text) {
		return text.length() <= MAX_LENGTH;
	}

	private boolean minimum(String text) {
		return text.length() >= MIN_LENGTH;
	}

	public boolean specialCharacters(String string) {
		Pattern pattern = Pattern.compile("[^&%$#@!~áéíóúñ+-]+");
		Matcher matcher = pattern.matcher(string);
		return matcher.matches();
	}

}
