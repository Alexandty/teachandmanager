package com.tns.request.request.model;

import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ta_asigancion_lider")
public class AsignacionLider {

	@Id
	@Embedded
	private AsignacionLiderPK idAsignacion;

	public AsignacionLiderPK getIdAsignacion() {
		return idAsignacion;
	}

	public void setIdAsignacion(AsignacionLiderPK idAsignacion) {
		this.idAsignacion = idAsignacion;
	}

}
