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
@Table(name = "ta_vacation")
public class SolicitudVacaciones {

	@Id
	@GeneratedValue
	@Column(name = "id_request_vacation")
	private Long idVacationRequest;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "requested_days")
	private int requestedDays;

	@Column(name = "motivo")
	private String motivo;

	@Column(name = "estado")
	private String estado;

	@OneToOne
	@JoinColumn(name = "id_person")
	private Person personId;

	public Person getPersonId() {
		return personId;
	}

	public void setPersonId(Person personId) {
		this.personId = personId;
	}

	public SolicitudVacaciones() {
		super();
	}

	public Long getIdRequest() {
		return idVacationRequest;
	}

	public void setIdRequest(Long idVacationRequest) {
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

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
