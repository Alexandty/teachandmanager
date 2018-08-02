package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ta_user")
public class User {

	@Id
	@Column(name = "user_name")
	private String username;

	@Column(name = "password")
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username.trim().toLowerCase();
	}

	public String getPassword() {
		return password.trim();
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
