package com.tns.request.request.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.SolicitudVacacionesService;
import com.tns.request.request.dto.SolicitudVacacionesUsernameDTO;
import com.tns.request.request.model.SolicitudVacaciones;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/solicitud")
@RestController
public class SolicitudVacacionesController {

	@Autowired
	private SolicitudVacacionesService solicitudVacacionesService;

	@GetMapping("vacaciones/consultar/{username}")
	public List<SolicitudVacaciones> getSolicitudVacacion(@PathVariable String username) {
		return solicitudVacacionesService.getSolicitudesByPersonId(username);
	}

	@GetMapping("vacaciones/disponibles/{username}")
	public int getDiasDisponibles(@PathVariable String username) {
		return solicitudVacacionesService.getDiasDisponibles(new Date(), username);
	}

	@ResponseBody
	@RequestMapping("vacaciones/disponibles")
	public int getDiasDisponiblesPorFecha(@RequestBody SolicitudVacacionesUsernameDTO solicitudVacaUserDTO) {
		return solicitudVacacionesService.getDiasDisponiblesVacaUserDTO(solicitudVacaUserDTO);
	}

}
