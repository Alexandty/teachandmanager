package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ta_person")
public class Person {

	@Id
	@GeneratedValue
	@Column(name = "id_person")
	private long idPerson;

	@Column(name = "name")
	private String name;

	@Column(name = "last_Name")
	private String lastName;

	@OneToOne
	@JoinColumn(name = "fk_user")
	private User userId; // userFK

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
