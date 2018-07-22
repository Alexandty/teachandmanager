package com.tns.request.request.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.SolicitudVacaciones;

public interface SolicitudVacacionesRepository extends CrudRepository<SolicitudVacaciones, Long> {

	@Query("select s.startDate, s.endDate, s.requestedDays, p.nombres, p.apellidos "
			+ "from SolicitudVacaciones s, Persona p inner join s.area ar where ar.idArea = :idArea")
	int findAllByCedulaAndIdRequest(long cedula);
	
}
