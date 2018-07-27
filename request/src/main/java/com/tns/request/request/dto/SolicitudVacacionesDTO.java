package com.tns.request.request.dto;

import java.sql.Date;

public class SolicitudVacacionesDTO {

	private Date startDate;

	private Date endDate;

	private int requestedDays;

	public SolicitudVacacionesDTO(Date startDate, Date endDate, int requestedDays) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.requestedDays = requestedDays;
	}

	public SolicitudVacacionesDTO() {
		super();
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
