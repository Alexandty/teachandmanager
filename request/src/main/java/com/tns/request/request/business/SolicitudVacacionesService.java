package com.tns.request.request.business;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tns.request.request.dto.SolicitudVacacionesUsernameDTO;
import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.AsignacionLider;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.IAsignacionRepository;
import com.tns.request.request.repository.IPersonRepository;
import com.tns.request.request.repository.SolicitudVacacionesRepository;
import com.tns.request.request.util.UtilDate;

@Service
public class SolicitudVacacionesService {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

	@Autowired
	private IPersonRepository personRepository;

	@Autowired
	private IAsignacionRepository asignacionRepository;

	private SolicitudVacaciones solicitudVacaciones;

	// public Optional<SolicitudVacaciones> getAllPersonById(Long cedula) {
	// return solicitudVacacionesRepository.findById(cedula);
	// }

	public SolicitudVacaciones crearSolicitud(SolicitudVacacionesUsernameDTO solicitudVacacionesUsernameDTO) {
		SolicitudVacaciones solicitudVacaciones = new SolicitudVacaciones();
		Person persona = personRepository.findByUserIdUsername(solicitudVacacionesUsernameDTO.getUser());
		solicitudVacaciones
				.setRequestedDays((int) UtilDate.diferenciaDias(solicitudVacacionesUsernameDTO.getStartDate(),
						solicitudVacacionesUsernameDTO.getEndDate()));
		solicitudVacaciones.setEndDate(solicitudVacacionesUsernameDTO.getEndDate());
		solicitudVacaciones.setStartDate(solicitudVacacionesUsernameDTO.getStartDate());
		solicitudVacaciones.setPersonId(persona);
		return solicitudVacacionesRepository.save(solicitudVacaciones);
	}

	public List<SolicitudVacaciones> getSolicitudesByPersonId(String username) {
		List<SolicitudVacaciones> solicitudBD = solicitudVacacionesRepository
				.findByPersonIdIdPersonOrderByPersonId(username);
		if (solicitudBD.isEmpty()) {
			throw new BusinessException("Usted no tiene solicitudes");
		}
		return solicitudBD;
	}

	public int obtenerTotalDiasDisfrutados(String username) {
		List<SolicitudVacaciones> solicitudBD = solicitudVacacionesRepository
				.findByPersonIdIdPersonOrderByPersonId(username);
		if (solicitudBD.isEmpty()) {
			return 0;
		}
		return solicitudBD.stream().map(s -> s.getRequestedDays()).reduce(0, (a, b) -> a + b).intValue();
	}

	public int getDiasDisponibles(Date fechaInicio, String username) {
		int diasDisfrutados = obtenerTotalDiasDisfrutados(username);
		Person persona = personRepository.findByUserIdUsername(username);
		Date fechaIngreso = persona.getEntryDate();
		return UtilDate.calcularDiasDisponibles(fechaIngreso, fechaInicio, diasDisfrutados);
	}

	public int getDiasDisponiblesVacaUserDTO(SolicitudVacacionesUsernameDTO solicitudVacaUserDTO) {
		int diasDisfrutados = obtenerTotalDiasDisfrutados(solicitudVacaUserDTO.getUser());
		Person persona = personRepository.findByUserIdUsername(solicitudVacaUserDTO.getUser());
		Date fechaIngreso = persona.getEntryDate();
		Date fechaInicio = solicitudVacaUserDTO.getStartDate();
		Date fechaFin = solicitudVacaUserDTO.getEndDate();
		if (!UtilDate.checkVacationDates(fechaInicio, fechaFin)) {
			throw new BusinessException("Fechas incorrectas");
		}
		if (UtilDate.diferenciaDias(fechaInicio, fechaFin) > UtilDate.calcularDiasDisponibles(fechaIngreso, fechaInicio,
				diasDisfrutados)) {
			throw new BusinessException("No tienes suficientes dias");
		}
		return getDiasDisponibles(fechaInicio, solicitudVacaUserDTO.getUser());
	}

	private List<Person> getSolversDelLider(long idLider) {
		List<AsignacionLider> asignaciones = asignacionRepository.findByIdAsignacionIdLider(idLider);
		return asignaciones.stream().map(this::getSolver).collect(Collectors.toList());
	}

	private Person getSolver(AsignacionLider asignacion) {
		return personRepository.findById(asignacion.getIdAsignacion().getIdSolver())
				.orElseThrow(() -> new BusinessException("No se encontro solver...."));
	}

	public List<SolicitudVacaciones> getAllSolverSolicitudes(String username) {
		Person persona = personRepository.findByUserIdUsername(username);
		List<Person> solversList = getSolversDelLider(persona.getIdPerson());
		return solversList.stream().map(p -> p.getIdPerson())
				.map(p -> solicitudVacacionesRepository.findByPersonIdIdPerson(p)).flatMap(List::stream)
				.collect(Collectors.toList());
	}

	public ResponseEntity<SolicitudVacaciones> updateSolicitud(Long idRequest,
			SolicitudVacaciones solicitudVacaciones) {
		Optional<SolicitudVacaciones> solicitudData = solicitudVacacionesRepository.findById(idRequest);
		if (solicitudData.isPresent()) {
			SolicitudVacaciones solicitudSave = solicitudData.get();
			solicitudSave.setEndDate(solicitudVacaciones.getEndDate());
			solicitudSave.setStartDate(solicitudVacaciones.getStartDate());
			solicitudSave.setEstado(solicitudVacaciones.getEstado());
			solicitudSave.setMotivo(solicitudVacaciones.getMotivo());
			solicitudSave.setRequestedDays(solicitudVacaciones.getRequestedDays());
			solicitudSave.setReturnDate(solicitudVacaciones.getReturnDate());
			SolicitudVacaciones solicitudUpdate = solicitudVacacionesRepository.save(solicitudSave);
			return new ResponseEntity<>(solicitudUpdate, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
