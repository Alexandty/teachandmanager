package com.tns.request.request.dto;

import java.util.Date;

public class PersonDTO {

	private String name;

	private String lastName;

	private Date entryDate;

	private String user;

	private long idPerson;

	public PersonDTO(String name, String lastName, Date entryDate, long idPerson) {
		super();
		this.name = name;
		this.lastName = lastName;
		this.entryDate = entryDate;
		this.idPerson = idPerson;
	}

	public PersonDTO() {
		super();
	}

	public long getIdPerson() {
		return idPerson;
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

	public Date getEntryDate() {
		return entryDate;
	}

	public void setEntryDate(Date entryDate) {
		this.entryDate = entryDate;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

}
