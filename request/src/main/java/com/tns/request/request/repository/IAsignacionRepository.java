package com.tns.request.request.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.AsignacionLider;
import com.tns.request.request.model.AsignacionLiderPK;

public interface IAsignacionRepository extends CrudRepository<AsignacionLider, AsignacionLiderPK> {

	List<AsignacionLider> findByIdAsignacionIdLider(long idLider);

}
