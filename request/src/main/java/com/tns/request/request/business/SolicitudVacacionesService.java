package com.tns.request.request.business;

import java.text.ParseException;
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
import com.tns.request.request.repository.ISolicitudVacacionesRepository;
import com.tns.request.request.util.UtilDate;
import com.tns.request.request.util.UtilEmail;

@Service
public class SolicitudVacacionesService {

	@Autowired
	private UtilEmail utilEmail;

	@Autowired
	private ISolicitudVacacionesRepository solicitudVacacionesRepository;

	@Autowired
	private IPersonRepository personRepository;

	@Autowired
	private IAsignacionRepository asignacionRepository;

	public SolicitudVacaciones crearSolicitud(SolicitudVacacionesUsernameDTO solVUDTO) throws ParseException {
		getDiasDisponiblesVacaUserDTO(solVUDTO);
		SolicitudVacaciones solVac = new SolicitudVacaciones();
		String dateReturn = UtilDate.calcularFecharRetornoLabor(solVUDTO.getEndDate());
		Person persona = personRepository.findByUserIdUsername(solVUDTO.getUser());
		solVac.setRequestedDays((int) UtilDate.diferenciaDias(solVUDTO.getStartDate(), solVUDTO.getEndDate()));
		solVac.setEndDate(solVUDTO.getEndDate());
		solVac.setStartDate(solVUDTO.getStartDate());
		solVac.setReturnDate(UtilDate.getDateFromString(dateReturn));
		solVac.setEstado(solVUDTO.getEstado());
		solVac.setMotivo(solVUDTO.getMotivo());
		solVac.setPersonId(persona);
		return solicitudVacacionesRepository.save(solVac);
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
				.orElseThrow(() -> new BusinessException("No se encontro solver asociado al líder"));
	}

	public List<SolicitudVacaciones> getAllSolverSolicitudes(String username) {
		Person persona = personRepository.findByUserIdUsername(username);
		List<Person> solversList = getSolversDelLider(persona.getIdPerson());
		return solversList.stream().map(p -> p.getIdPerson())
				.map(p -> solicitudVacacionesRepository.findByPersonIdIdPerson(p)).flatMap(List::stream)
				.sorted((s1, s2) -> s1.getEndDate().compareTo(s2.getEndDate())).collect(Collectors.toList());
	}

	public ResponseEntity<SolicitudVacaciones> updateSolicitud(Long idRequest,
			SolicitudVacaciones solicitudVacaciones) {
		Optional<SolicitudVacaciones> solicitudData = solicitudVacacionesRepository.findById(idRequest);
		if (solicitudData.isPresent()) {
			SolicitudVacaciones solicitudSave = solicitudData.get();
			solicitudSave.setEstado(solicitudVacaciones.getEstado());
			solicitudSave.setMotivo(solicitudVacaciones.getMotivo());
			SolicitudVacaciones solicitudUpdate = solicitudVacacionesRepository.save(solicitudSave);
			sendEmail(solicitudSave);
			return new ResponseEntity<>(solicitudUpdate, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	private void sendEmail(SolicitudVacaciones solicitud) {
		AsignacionLider asignac = asignacionRepository
				.findByIdAsignacionIdSolver(solicitud.getPersonId().getIdPerson());
		Optional<Person> person = personRepository.findById(asignac.getIdAsignacion().getIdLider());
		utilEmail.sendNotification(solicitud.getEstado(), solicitud.getMotivo(), person.get().getEmail());
	}

}
