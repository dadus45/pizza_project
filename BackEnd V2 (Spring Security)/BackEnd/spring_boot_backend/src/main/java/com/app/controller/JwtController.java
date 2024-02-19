package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.JwtRequest;
import com.app.DTO.JwtResponse;
import com.app.service.JwtService;

@RestController
@CrossOrigin(origins = "*")
public class JwtController {

	@Autowired
	private JwtService jwtService;
	
	@PostMapping("/authenticate")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception
	{
		return jwtService.createJwtToken(jwtRequest);
	}
}
