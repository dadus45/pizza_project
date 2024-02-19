package com.app.service;

import com.app.DTO.RoleDTO;
import com.app.entity.Role;

public interface RoleService {
	
	Role createNewRole(RoleDTO roleDto);

}
