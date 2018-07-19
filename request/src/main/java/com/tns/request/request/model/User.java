package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ta_user")
public class User {

	@Id
	@GeneratedValue
	@Column(name = "id_user")
	private long idUser;
	@Column(name = "user_name")
	private String userName;
	@Column(name = "pass")
	private String password;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
