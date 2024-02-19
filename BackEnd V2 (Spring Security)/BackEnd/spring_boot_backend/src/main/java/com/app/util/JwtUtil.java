package com.app.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	
	private static final String SECRETE_KEY ="spring_boot_project";
	private static final int TOKEN_VALIDITY = 3600*5; 
	
	public String getUserNameFromToken(String token)
	{
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	//higher order function ==> accept function as a paratmeter ie. Function<T,R>
	private <T> T getClaimFromToken(String token, Function<Claims,T> claimResolver)
	{
		final Claims claims = getAllClaimsFromToken(token);
		return claimResolver.apply(claims);
	}
	
	private Claims getAllClaimsFromToken(String token)
	{
		return Jwts.parser().setSigningKey(SECRETE_KEY).parseClaimsJws(token).getBody();
	}
	
	public boolean validateToken(String token, UserDetails userDetails)
	{
		String userName = getUserNameFromToken(token);
		//check username we got from the token and username from token is same or not
		return ( userName.equals(userDetails.getUsername()) && !isTokenExpired(token) );
	}
	
	private boolean isTokenExpired(String token)
	{
		final Date expirationDate = getExpirationDateFromToken(token);
		// new Date() will return current date, below mwthod will check if token is expired
		return expirationDate.before(new Date());
	}
	
	private Date getExpirationDateFromToken(String token)
	{
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<String, Object>();
		
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(userDetails.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+ TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, SECRETE_KEY)
				.compact();
	}
	
	
}









