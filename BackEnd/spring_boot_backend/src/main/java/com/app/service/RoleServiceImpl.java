package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.RoleDTO;
import com.app.entity.Role;
import com.app.repository.RoleRepo;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Role createNewRole(RoleDTO roleDTO)
	{
		Role role = mapper.map(roleDTO,Role.class);
		System.out.println("in role service : " + role);
		
		return roleRepo.save(role);
	}
}
