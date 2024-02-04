package com.app.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

	@Id
	@NotBlank
	@Column(unique = true)
	private String userName;
	
	@NotBlank
	private String userFirstName;
	
	@NotBlank
	private String userLastName;
	
	@NotBlank
	private String userPassword;
	
	
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	//hb automatically create 3rd table user_role, will contain user_id and role_id column
	@JoinTable(name = "user_role",
	joinColumns = {
			@JoinColumn(name ="user_id")
	},
	inverseJoinColumns = {
			@JoinColumn(name = "role_id")
	}
			)
	private Set<Role> roles;
	
	
}
