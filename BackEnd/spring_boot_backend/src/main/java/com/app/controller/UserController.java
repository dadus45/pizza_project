package com.app.controller;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.app.entity.User;
import com.app.service.UserService;

@RestController("/user")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody @Valid User user)
	{
		return userService.registerNewUser(user);
	}
	
	@PostConstruct
	public void initRolesAndUser()
	{
		userService.initRolesAndUser();
	}

}
