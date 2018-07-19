package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ta_person")
public class Person {

	@Id
	@GeneratedValue
	@Column(name = "id_user")
	private long idPerson;
	@Column(name = "name")
	private String name;
	@Column(name = "last_Name")
	private String lastName;

}
