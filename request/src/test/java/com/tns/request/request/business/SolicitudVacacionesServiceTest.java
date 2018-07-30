package com.tns.request.request.business;

import static org.mockito.Mockito.when;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.IPersonRepository;
import com.tns.request.request.repository.SolicitudVacacionesRepository;
import com.tns.request.request.util.UtilDate;

@RunWith(MockitoJUnitRunner.class)
public class SolicitudVacacionesServiceTest {

	@InjectMocks
	private SolicitudVacacionesService solicitudVacacionesService;

	@Mock
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

	@Mock
	private IPersonRepository personRepository;

	@Test
	public void debeBuscarDiasHabilesdisfurtadosYDevolverLaSuma() {
		SolicitudVacaciones solicitud1 = new SolicitudVacaciones();
		solicitud1.setRequestedDays(4);
		SolicitudVacaciones solicitud2 = new SolicitudVacaciones();
		solicitud2.setRequestedDays(5);
		List<SolicitudVacaciones> solicitudBD = new ArrayList<SolicitudVacaciones>();
		solicitudBD.add(solicitud1);
		solicitudBD.add(solicitud2);

		String username = null;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(username)).thenReturn(solicitudBD);

		int resultado = solicitudVacacionesService.obtenerTotalDiasDisfrutados(username);

		Assert.assertEquals("se esperaba 9", 9, resultado);
	}

	@Test
	public void debeRetornar0AlNoEncontrarDatos() {
		List<SolicitudVacaciones> solicitudBD = new ArrayList<SolicitudVacaciones>();

		String username = null;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(username)).thenReturn(solicitudBD);

		int respuesta = solicitudVacacionesService.obtenerTotalDiasDisfrutados(username);

		Assert.assertEquals("se espera 0 dias disponibles", 0, respuesta);
	}

	@Test(expected = BusinessException.class)
	public void debeFallarAlNoEncontrarDatosEnBD() {
		List<SolicitudVacaciones> solicitudBD = new ArrayList<SolicitudVacaciones>();

		String username = null;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(username)).thenReturn(solicitudBD);

		solicitudVacacionesService.getSolicitudesByPersonId(username);
	}

	@Test
	public void debeEncontrarDatosEnLaBD() {
		SolicitudVacaciones solicitud1 = new SolicitudVacaciones();
		solicitud1.setIdRequest(23L);
		solicitud1.setRequestedDays(4);
		List<SolicitudVacaciones> solicitudBD = new ArrayList<SolicitudVacaciones>();
		solicitudBD.add(solicitud1);

		String username = null;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(username)).thenReturn(solicitudBD);

		List<SolicitudVacaciones> resultado = solicitudVacacionesService.getSolicitudesByPersonId(username);

		Assert.assertEquals("se esperaba una lista", solicitudBD, resultado);
	}

	@Test
	public void debeCalcularDiasVacacionesDisponiblesParaFechaSelecionada() throws ParseException {
		String username = null;
		Date fechaInicio = UtilDate.getDateFromString("26/07/2020");
		List<SolicitudVacaciones> solicitudBD = new ArrayList<SolicitudVacaciones>();
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(username)).thenReturn(solicitudBD);
		Person persona = new Person();
		persona.setEntryDate(UtilDate.getDateFromString("26/07/2019"));
		when(personRepository.findByUserIdUsername(username)).thenReturn(persona);

		int respuesta = solicitudVacacionesService.getDiasDisponibles(fechaInicio, username);

		Assert.assertEquals("se espera 15 dias disponibles", 15, respuesta);
	}
}
