package com.tns.request.request.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.tns.request.request.converters.IntToStringConverter;

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
	@Convert(converter = IntToStringConverter.class)
	private String estado;
	
	@Column(name = "return_date")
	private Date returnDate;
	
	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

	@OneToOne
	@JoinColumn(name = "id_person")
	private Person personId;

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String  getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

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
