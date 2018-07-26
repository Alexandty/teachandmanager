package com.tns.request.request.business;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.SolicitudVacacionesRepository;

@RunWith(MockitoJUnitRunner.class)
public class SolicitudVacacionesServiceTest {
	
	@InjectMocks
	private SolicitudVacacionesService bussines;
	
	@Mock
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

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
		
		int resultado=bussines.obtenerTotalDiasDisfrutados(id);
		
		Assert.assertEquals("se esperaba 9",9, resultado);
	}
	
	@Test(expected=BusinessException.class)
	public void debeFallarAlNoEncontrarDatos() {
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		bussines.obtenerTotalDiasDisfrutados(id);
	}
	
	@Test(expected=BusinessException.class)
	public void debeFallarAlNoEncontrarDatosEnBD() {
		List<SolicitudVacaciones> solicitudBD=new ArrayList<SolicitudVacaciones>();
		
		Long id= 0L;
		when(solicitudVacacionesRepository.findByPersonIdIdPersonOrderByPersonId(id)).thenReturn(solicitudBD);
		
		bussines.getSolicitudesByPersonId(id);
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
		
		List<SolicitudVacaciones> resultado=bussines.getSolicitudesByPersonId(id);
		
		Assert.assertEquals("se esperaba una lista",solicitudBD, resultado);
	}
	
}
