package com.app.entity;


import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CartItem extends BaseEntity {

	private String name;
	
	private int quantity;
	
	private double price;
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable = false)
	private User user;
}
