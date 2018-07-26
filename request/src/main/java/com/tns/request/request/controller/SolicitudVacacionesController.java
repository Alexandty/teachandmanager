package com.tns.request.request.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.SolicitudVacacionesService;
import com.tns.request.request.model.SolicitudVacaciones;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/solicitud")
@RestController
public class SolicitudVacacionesController {

	@Autowired
	private SolicitudVacacionesService solicitudVacacionesService;

	@GetMapping("vacaciones/consultar/{id}")
	public List<SolicitudVacaciones> getSolicitudVacacion(@PathVariable Long id) {
		return solicitudVacacionesService.getSolicitudesByPersonId(id);
	}
	
	@GetMapping("vacaciones/disponibles/{id}")
	public int getDiasDisponibles(@PathVariable Long id) {
		return 0;
	}
	
	

}
