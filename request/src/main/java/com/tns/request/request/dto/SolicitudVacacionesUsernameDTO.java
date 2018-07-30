package com.tns.request.request.dto;

import java.sql.Date;

public class SolicitudVacacionesUsernameDTO {

	private String user;

	private Date startDate;

	private Date endDate;

	public Date getStartDate() {
		return startDate;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
