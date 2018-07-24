package com.tns.request.request.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.SolicitudVacacionesRepository;

@Service
public class SolicitudVacacionesService {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

	

	public Optional<SolicitudVacaciones> getAllPersonById(Long cedula) {

		return solicitudVacacionesRepository.findById(cedula);
	}

	public List<SolicitudVacaciones> getSolicitudesByPersonId(Long id) {
		
		List<SolicitudVacaciones> solicitudBD = solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id);

		if (null == solicitudBD) {
			throw new BusinessException("Usted no tiene solicitudes");
		} else {
			if (solicitudBD != null) {
				return solicitudBD;
			}
			throw new BusinessException("No se encuentran solicitudes");
		}
		
	}


}
