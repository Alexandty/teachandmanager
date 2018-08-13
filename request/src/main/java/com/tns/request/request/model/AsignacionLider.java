package com.tns.request.request.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
	
//	@ManyToMany
//	@JoinColumn(name = "id_lider")
//	private Person idLider;
//
//	@ManyToMany
//	@JoinColumn(name = "id_solver")
//	private Person idSolver;

}
