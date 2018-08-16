package com.tns.request.request.business;

import static org.junit.Assert.assertTrue;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Any;
import com.tns.request.request.dto.SolicitudVacacionesUsernameDTO;
import com.tns.request.request.exception.BusinessException;
import com.tns.request.request.model.AsignacionLider;
import com.tns.request.request.model.Person;
import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.IAsignacionRepository;
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

	@Mock
	private IAsignacionRepository asignacionRepository;

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

	@Test(expected = BusinessException.class)
	public void debeRetornarExceptionPorFechasIncorrectas() throws ParseException {
		SolicitudVacacionesUsernameDTO solDTO = new SolicitudVacacionesUsernameDTO();
		solDTO.setEndDate(new Date());
		solDTO.setStartDate(new Date());
		Person p = new Person();
		p.setIdPerson(1);
		when(personRepository.findByUserIdUsername(null)).thenReturn(p);

		SolicitudVacaciones res = solicitudVacacionesService.crearSolicitud(solDTO);
	}

	@Test
	public void debeCrearSolicitud() throws ParseException {
		SolicitudVacacionesUsernameDTO solDTO = new SolicitudVacacionesUsernameDTO();
		Date sDate = UtilDate.getDateFromString("1/1/2020");
		Date eDate = UtilDate.getDateFromString("1/2/2020");
		solDTO.setStartDate(sDate);
		solDTO.setEndDate(eDate);
		Person p = new Person();
		p.setEntryDate(new Date(1));
		when(personRepository.findByUserIdUsername(anyString())).thenReturn(p);

		SolicitudVacaciones res = new SolicitudVacaciones();
		res.setStartDate(sDate);
		solicitudVacacionesService.crearSolicitud(solDTO);
		when(solicitudVacacionesRepository.save(any())).thenReturn(res);

		Assert.assertEquals(res.getStartDate(), solDTO.getStartDate());
	}

	@Test
	public void debeRetornarUnaListaDePersonas() throws NoSuchMethodException, SecurityException,
			IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		Method method = SolicitudVacacionesService.class.getDeclaredMethod("getSolversDelLider", long.class);
		method.setAccessible(true);
		when(asignacionRepository.findByIdAsignacionIdLider(Mockito.anyLong()))
				.thenReturn(new ArrayList<AsignacionLider>());
		List<Person> result = (List<Person>) method.invoke(solicitudVacacionesService, 0);

		Assert.assertNotNull(result);
	}

	@Test
	public void debeRetornarNotFoundExceptionCuandoActualiceSolicitud() {
		Optional<SolicitudVacaciones> sv = Optional.empty();
		when(solicitudVacacionesRepository.findById(anyLong())).thenReturn(sv);
		ResponseEntity<SolicitudVacaciones> updateSolicitud = solicitudVacacionesService.updateSolicitud(anyLong(),
				null);

		assertTrue(HttpStatus.NOT_FOUND.equals(updateSolicitud.getStatusCode()));
		verify(solicitudVacacionesRepository, Mockito.never()).save(Matchers.anyObject());
	}

	@Test
	public void debeRetornarOkCuandoActualiceSolicitud() {
		SolicitudVacaciones solVa = new SolicitudVacaciones();
		solVa.setEstado("estado");
		solVa.setMotivo("motivo");
		Optional<SolicitudVacaciones> sv = Optional.ofNullable(solVa);
		when(solicitudVacacionesRepository.findById(anyLong())).thenReturn(sv);
		ResponseEntity<SolicitudVacaciones> updateSolicitud = solicitudVacacionesService.updateSolicitud(anyLong(),
				solVa);

		verify(solicitudVacacionesRepository).save(Matchers.anyObject());
		assertTrue(HttpStatus.OK.equals(updateSolicitud.getStatusCode()));

	}

	// @Test(expected = BusinessException.class)
	// public void debeRetornarElSolverAsociadoAlLider() throws
	// NoSuchMethodException, SecurityException,
	// IllegalAccessException, IllegalArgumentException, InvocationTargetException {
	// AsignacionLider as = new AsignacionLider();
	// AsignacionLiderPK aPk = new AsignacionLiderPK();
	// aPk.setIdLider(1);
	// as.setIdAsignacion(aPk);
	// Method method =
	// SolicitudVacacionesService.class.getDeclaredMethod("getSolver",
	// AsignacionLider.class);
	// method.setAccessible(true);
	// when(personRepository.find)
	// Person p = (Person) method.invoke(solicitudVacacionesService, as);
	// Assert.assertNotNull(p);
	// }

	// @Test
	// public void test() {
	// when(solicitudVacacionesService.obtenerTotalDiasDisfrutados(null)).thenReturn().thenReturn();
	// Person p = new Person();
	// when(personRepository.findByUserIdUsername(null)).thenReturn(p);
	//
	// }

	// @Test
	// public void debeRetornarListaSolversPorLider() {
	// SolicitudVacacionesService mock = spy(new SolicitudVacacionesService());
	// String username= null;
	// Person persona = new Person();
	// when(personRepository.findByUserIdUsername(username)).thenReturn(persona);
	// List<Person> p = new ArrayList<Person>();
	// doReturn(p).when(mock, "getSolversDelLider", ArgumentMatchers.anyList());
	// List<Person> personas = Mockito.mock(List.class);
	// List<SolicitudVacaciones> res =
	// solicitudVacacionesService.getAllSolverSolicitudes(username);
	//
	// Assert.assertEquals("se esperaba una lista", , res);
	// }
	//
	// @Test
	// public void asd() {
	// SolicitudVacacionesService mock = spy(new SolicitudVacacionesService());
	// List<SolicitudVacaciones> s = mock.getAllSolverSolicitudes(null);
	//
	// verify(mock).invoke("getSolversDelLider", ArgumentMatchers.anyList());
	// }

}
