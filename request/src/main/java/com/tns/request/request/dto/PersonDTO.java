package com.tns.request.request.dto;

import java.util.Date;

public class PersonDTO {

	private String name;

	private String lastName;

	private Date entryDate;

	private String user;
	
	private boolean isLider;

	

	public PersonDTO(String name, String lastName, Date entryDate, boolean isLider) {
		super();
		this.name = name;
		this.lastName = lastName;
		this.entryDate = entryDate;
		this.isLider = isLider;
	}

	public PersonDTO() {
		super();
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

	public boolean isLider() {
		return isLider;
	}

	public void setLider(boolean isLider) {
		this.isLider = isLider;
	}

}
