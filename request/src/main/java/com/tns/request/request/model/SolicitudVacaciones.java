package com.tns.request.request.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ta_vacation")
public class SolicitudVacaciones {

	@Id
	@Column(name="id_request_vacation")
	private long idVacationRequest;

	@Column(name = "start_date")
	private Date startDate;
	
	@Column(name = "end_date")
	private Date endDate;
	
	@Column(name = "requested_days")
	private int requestedDays;
	
	@OneToOne
	@JoinColumn(name="id_person")	
	private Person person_id;
	

	public Person getPerso_id() {
		return person_id;
	}

	public void setPerso_id(Person perso_id) {
		this.person_id = perso_id;
	}

	public SolicitudVacaciones() {
		super();
	}

	public long getIdRequest() {
		return idVacationRequest;
	}

	public void setIdRequest(long idVacationRequest) {
		this.idVacationRequest = idVacationRequest;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public int getRequestedDays() {
		return requestedDays;
	}

	public void setRequestedDays(int requestedDays) {
		this.requestedDays = requestedDays;
	}

	public Date getEndDate() {
		return endDate;
	}

	

}
