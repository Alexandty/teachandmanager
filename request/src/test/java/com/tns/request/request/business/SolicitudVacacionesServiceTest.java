package com.tns.request.request.business;

import static org.mockito.Mockito.when;

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

@RunWith(MockitoJUnitRunner.class)
public class SolicitudVacacionesServiceTest {
	
	@InjectMocks
	private SolicitudVacacionesService business;
	
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
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		solicitudBD.add(solicitud1);
		solicitudBD.add(solicitud2);
		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		int resultado=business.obtenerTotalDiasDisfrutados(id);
		
		Assert.assertEquals("se esperaba 9",9, resultado);
	}
	
	@Test
	public void debeRetornar0AlNoEncontrarDatos() {
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		int respuesta=business.obtenerTotalDiasDisfrutados(id);

		Assert.assertEquals("se espera 0 dias disponibles",0, respuesta);
	}
	
	@Test(expected=BusinessException.class)
	public void debeFallarAlNoEncontrarDatosEnBD() {
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		business.getSolicitudesByPersonId(id);
	}
	
	@Test
	public void debeEncontrarDatosEnLaBD() {
		SolicitudVacaciones solicitud1 = new SolicitudVacaciones();
		solicitud1.setIdRequest(23L);
		solicitud1.setRequestedDays(4);
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		solicitudBD.add(solicitud1);

		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		List<SolicitudVacaciones> resultado=business.getSolicitudesByPersonId(id);
		
		Assert.assertEquals("se esperaba una lista",solicitudBD, resultado);
	}
	
	@Test
	public void debeRetornarDiasDisponibles() {
		Long id=1010L;
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		Person persona = new Person();
		persona.setEntryDate(java.sql.Date.valueOf(java.time.LocalDate.now()));
		when(personRepository.findByUserIdIdUser(id)).thenReturn(persona);
		int respuesta=business.getDiasDisponiblesALaFecha(id);
		Assert.assertEquals("se espera 0 dias disponibles",0, respuesta);
	}
	
	@Test
	public void debeRetornarDiasDisponibles2() {
		Long id=1010L;
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		Person persona = new Person();
		persona.setEntryDate(java.sql.Date.valueOf(java.time.LocalDate.of(2017, 07, 26)));
		when(personRepository.findByUserIdIdUser(id)).thenReturn(persona);
		int respuesta=business.getDiasDisponiblesALaFecha(id);
		Assert.assertEquals("se espera 15 dias disponibles",15, respuesta);
	}
}
