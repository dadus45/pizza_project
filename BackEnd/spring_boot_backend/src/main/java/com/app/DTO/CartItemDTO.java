package com.app.DTO;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDTO {
	
	
	@NotNull
	private String name;
	@Min(1)
	private int quantity;
	@Min(1)
	private double price;
	
	@NotNull
	private String userName;
}
