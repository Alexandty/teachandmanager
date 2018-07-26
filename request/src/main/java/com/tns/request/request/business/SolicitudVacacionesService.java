package com.tns.request.request.business;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.IPersonRepository;
import com.tns.request.request.repository.SolicitudVacacionesRepository;
import com.tns.request.request.util.UtilDate;

@Service
public class SolicitudVacacionesService {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;
	
	@Autowired
	private IPersonRepository personRepository;

	public Optional<SolicitudVacaciones> getAllPersonById(Long cedula) {

		return solicitudVacacionesRepository.findById(cedula);
	}

	public List<SolicitudVacaciones> getSolicitudesByPersonId(Long id) {

		List<SolicitudVacaciones> solicitudBD = solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id);

		if (solicitudBD.isEmpty()) {
			throw new BusinessException("Usted no tiene solicitudes");
		}
		return solicitudBD;
	}

	public int obtenerTotalDiasDisfrutados(Long id) {
		List<SolicitudVacaciones> solicitudBD = solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id);
		if (solicitudBD.isEmpty()) {
			return 0;
		}
		return solicitudBD.stream().map(s -> s.getRequestedDays()).reduce(0, (a, b) -> a + b).intValue();
	}

	public int getDiasDisponiblesALaFecha(Long id) {
		Date fechaActual =new Date();
		int diasDisfrutados = obtenerTotalDiasDisfrutados(id);
		Person persona = personRepository.findByUserIdIdUser(id);
		Date fechaIngreso = persona.getEntryDate();
		return UtilDate.calcularDiasDisponibles(fechaIngreso, fechaActual, diasDisfrutados);		
	}

}
