package com.app.service;

import java.util.HashSet;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.DTO.JwtRequest;
import com.app.DTO.JwtResponse;
import com.app.entity.User;
import com.app.repository.UserRepo;
import com.app.util.JwtUtil;

@Service
public class JwtService implements UserDetailsService{

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private AuthenticationManager authenticationManager ; 
	
	public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception
	{
		String userName = jwtRequest.getUserName();
		String userPassword = jwtRequest.getUserPassword();
		autheticate(userName,userPassword); 
		
		final UserDetails userDetails = loadUserByUsername(userName);
		
		String generatedToken = jwtUtil.generateToken(userDetails);
		//String finalgenerate="Bearer "+generatedToken;
		User user = userRepo.findById(userName).get();
		
		return new JwtResponse(user, generatedToken);
	}
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		
		User user = userRepo.findById(userName).get();
		
		if(user!= null){
			return new org.springframework.security.core.userdetails.User(
					user.getUserName(), 
					user.getUserPassword(), 
					getAuthorities(user));
		}else {
			throw new UsernameNotFoundException("User name not valid");
		}
	}
	
	private Set getAuthorities(User user ) {
		Set authorities = new HashSet();
		 user.getRoles().forEach( role ->{authorities.add(new SimpleGrantedAuthority("ROLE_"+role.getRoleName()));});
		 
		 return authorities;
	}
	
	private void autheticate(String userName, String userPassword) throws Exception
	{
		try {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
		}catch(DisabledException e)
		{
			throw new Exception("User is disabled");
			
		}catch(BadCredentialsException e)
		{
			throw new Exception("Bad credentials from user");
		}
	}

	
}
