package com.tns.request.request.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
