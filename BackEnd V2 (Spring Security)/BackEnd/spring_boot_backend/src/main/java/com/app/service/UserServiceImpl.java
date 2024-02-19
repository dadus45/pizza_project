package com.app.service;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entity.Role;
import com.app.entity.User;
import com.app.repository.RoleRepo;
import com.app.repository.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public User registerNewUser(User user) {
		
		Role role = roleRepo.findById("user").get();
		
		Set<Role> roles = new HashSet<>();
		
		roles.add(role);
		user.setRoles(roles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		
		return userRepo.save(user);
	}

	@Override
	public void initRolesAndUser()
	{
		Role adminRole = new Role();
		adminRole.setRoleName("admin");
		adminRole.setRoleDescription("Admin role for app");
		roleRepo.save(adminRole);
		
		Role userRole = new Role();
		userRole.setRoleName("user");
		userRole.setRoleDescription("Default role for new user");
		roleRepo.save(userRole);
		
		//Creating admin 
		User adminUser = new User(); 
		
		adminUser.setUserFirstName("admin");
		adminUser.setUserLastName("admin");
		adminUser.setUserName("admin123");
		adminUser.setUserPassword(getEncodedPassword("admin@123"));
		
		Set<Role> adminRoles = new HashSet<Role>();
		adminRoles.add(adminRole);
		
		adminUser.setRoles(adminRoles);
		
		userRepo.save(adminUser);
		
		//Creating user
		User user = new User();
		
		user.setUserFirstName("onkar");
		user.setUserLastName("nikam");
		user.setUserName("onkar123");
		user.setUserPassword(getEncodedPassword("onkar@123"));
		
		Set<Role> userRoles  = new HashSet<Role>();
		
		userRoles.add(userRole);
		
		user.setRoles(userRoles);
		
		userRepo.save(user);
		
	}
	
	public String getEncodedPassword(String password) {
		
		return passwordEncoder.encode(password);
	}
	
}























