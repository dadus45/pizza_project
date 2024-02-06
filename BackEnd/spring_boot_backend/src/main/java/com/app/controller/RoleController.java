package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.RoleDTO;
import com.app.entity.Role;
import com.app.service.RoleService;

@RestController
@RequestMapping("/role")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@PostMapping("/createRole")
	public Role createRole(@RequestBody @Valid RoleDTO roleDto)
	{
		System.out.println("In cretate role :"+roleDto);
		return roleService.createNewRole(roleDto);
	}
}
