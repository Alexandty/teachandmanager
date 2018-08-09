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
@RequestMapping("/solicitudlider")
@RestController
public class SolicitudLiderController {

	@Autowired
	private SolicitudVacacionesService solicitudVacacionesService;

	@GetMapping("vacaciones/consultar/{username}")
	public List<SolicitudVacaciones> getSolicitudVacacion(@PathVariable String username) {
		return solicitudVacacionesService.getAllSolverSolicitudes(username);
	}

}
