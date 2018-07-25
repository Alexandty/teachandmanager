package com.tns.request.request.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.SolicitudVacaciones;

public interface SolicitudVacacionesRepository extends CrudRepository<SolicitudVacaciones, Long> {

	List<SolicitudVacaciones> findByPersonIdIdPersonOrderByPersonId(Long id);

}
