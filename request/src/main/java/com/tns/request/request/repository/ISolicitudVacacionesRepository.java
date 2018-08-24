package com.tns.request.request.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.tns.request.request.model.SolicitudVacaciones;

public interface ISolicitudVacacionesRepository extends CrudRepository<SolicitudVacaciones, Long> {
		
	@Query(value = "select * from ta_vacation join ta_person on ta_vacation.id_person = ta_person.id_person join ta_user on ta_user.user_name = ta_person.fk_user where ta_user.user_name = ?1 order by ta_vacation.end_date asc" , nativeQuery = true)
	List<SolicitudVacaciones> findByPersonIdIdPersonOrderByPersonId(String username);
	
	List<SolicitudVacaciones> findByPersonIdIdPerson(Long idPerson);
	
}
