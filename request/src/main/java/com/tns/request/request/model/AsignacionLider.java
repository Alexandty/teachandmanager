package com.tns.request.request.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "ta_asigancion_lideres")
public class AsignacionLider {

	@EmbeddedId
	private AsignacionLiderPK idAsignacion;

	public AsignacionLiderPK getIdAsignacion() {
		return idAsignacion;
	}

	public void setIdAsignacion(AsignacionLiderPK idAsignacion) {
		this.idAsignacion = idAsignacion;
	}

}
