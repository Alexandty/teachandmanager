package com.tns.request.request.model;

import java.util.Date;

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

	@Column(name = "lastname")
	private String lastName;

	@Column(name = "entry_date")
	private Date entryDate;

	@Column(name = "rol")
	private String rol;

	@OneToOne
	@JoinColumn(name = "fk_user")
	private User userId;

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public long getIdPerson() {
		return idPerson;
	}

	public Date getEntryDate() {
		return entryDate;
	}

	public void setEntryDate(Date entryDate) {
		this.entryDate = entryDate;
	}

	public void setIdPerson(long idPerson) {
		this.idPerson = idPerson;
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

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

}
