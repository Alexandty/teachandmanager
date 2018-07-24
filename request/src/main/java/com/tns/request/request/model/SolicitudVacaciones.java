package com.tns.request.request.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ta_vacation")
@NamedQueries({
		@NamedQuery(name = "SolicitudVacaciones.findByCedula", query = "SELECT  S FROM SolicitudVacaciones S WHERE S.personId.idPerson = :cedula") })
public class SolicitudVacaciones {

	@Id
	@Column(name = "id_request_vacation")
	private Long idVacationRequest;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "requested_days")
	private int requestedDays;

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

}
