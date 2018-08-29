package com.tns.request.request.dto;

import java.util.Date;

public class SolicitudVacacionesUsernameDTO extends SolicitudVacacionesDTO {

	private String user;

	public SolicitudVacacionesUsernameDTO(Date applicationDate, Date startDate, Date endDate, int requestedDays,
			String motivo, String estado, String user) {
		super(startDate, endDate, requestedDays, motivo, estado);
		this.user = user;
	}

	public SolicitudVacacionesUsernameDTO() {
		super();
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
}