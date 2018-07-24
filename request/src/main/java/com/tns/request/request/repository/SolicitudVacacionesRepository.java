package com.tns.request.request.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.SolicitudVacaciones;

public interface SolicitudVacacionesRepository extends CrudRepository<SolicitudVacaciones, Long> {

	SolicitudVacaciones findByPersonIdIdPerson(Long id);

//	List<SolicitudVacaciones> findByCedula(Long cedula);

	

	

//	@Transactional
//	Stream<SolicitudVacaciones> findAllByRange(final Date startDate, final Date endDate);
}
