package com.tns.request.request.dto;

import java.util.Date;

public class SolicitudVacacionesDTO {

	private Date startDate;

	private Date endDate;

	private int requestedDays;

	private String motivo;

	private String estado;

	public SolicitudVacacionesDTO(Date startDate, Date endDate, int requestedDays, String motivo, String estado) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.requestedDays = requestedDays;
		this.motivo = motivo;
		this.estado = estado;
	}

	public SolicitudVacacionesDTO() {
		super();
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
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
