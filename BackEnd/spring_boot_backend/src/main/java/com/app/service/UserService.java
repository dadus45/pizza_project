package com.app.service;

import com.app.entity.User;

public interface UserService {

	User registerNewUser (User user);
	
	void initRolesAndUser();
}

