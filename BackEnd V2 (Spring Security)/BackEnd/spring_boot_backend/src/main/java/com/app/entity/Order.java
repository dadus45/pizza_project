package com.app.entity;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="user_order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Order extends BaseEntity{
	
	private LocalDate orderDate;
	
	
	private String userName;
	
	@OneToOne
	@JoinColumn(name = "address_id")
	private Address address;
	
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name = "order_Id")
	private List<CartItem> cartItem;
    
}
