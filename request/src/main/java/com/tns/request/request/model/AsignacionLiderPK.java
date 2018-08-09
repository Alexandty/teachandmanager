package com.tns.request.request.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AsignacionLiderPK implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "id_lider")
	private long idLider;

	@Column(name = "id_solver")
	private long idSolver;

	public long getIdLider() {
		return idLider;
	}

	public void setIdLider(long idLider) {
		this.idLider = idLider;
	}

	public long getIdSolver() {
		return idSolver;
	}

	public void setIdSolver(long idSolver) {
		this.idSolver = idSolver;
	}

}
