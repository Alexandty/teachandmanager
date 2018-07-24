package com.tns.request.request.business;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.SolicitudVacacionesRepository;

@Service
public class SolicitudVacacionesService {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

//	public SolicitudVacaciones add(SolicitudVacaciones solicitudVacaciones) {
//		return solicitudVacacionesRepository.save(solicitudVacaciones);
//
//	}

	
	
	public Optional<SolicitudVacaciones> getAllPersonById(Long cedula) {

		return solicitudVacacionesRepository.findById(cedula);
	}
	
	public SolicitudVacaciones getSolicitudesByPersonId(Long id) {
		
		SolicitudVacaciones solicitudBD = solicitudVacacionesRepository.findByPersonIdIdPerson(id);
		if (null == solicitudBD) {
			throw new BusinessException("Usted no tiene solicitudes");
		}else {
			if (solicitudBD != null) {
				return solicitudBD;
			}
		}
		throw new BusinessException("No se encuentran solicitudes");
	}

//	public void delete(long cedula) {
//
//		solicitudVacacionesRepository.deleteById(cedula);
//	}
//
//	public void update(SolicitudVacaciones solicitudVacaciones) {
//		solicitudVacacionesRepository.save(solicitudVacaciones);
//
//	}

//	public List<SolicitudVacaciones> getAll() {
////		solicitudVacacionesRepository.findAllByRange(null, null)
////				.filter(persona -> persona.getPerso_id().getLastName().toLowerCase().startsWith("a"))
////				.map(e -> e.getPerso_id()).distinct();
//		return solicitudVacacionesRepository.findAll();
//
//	}

	
}
