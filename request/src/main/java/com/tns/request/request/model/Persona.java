package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ta_persona")
public class Persona {

	@Id
	private long cedula;
	
	private String nombres;
	
	private String apellidos;
	
	@JoinTable(name="")
	@OneToMany
	private SolicitudVacaciones solicitudVacaciones;
	
	
}
