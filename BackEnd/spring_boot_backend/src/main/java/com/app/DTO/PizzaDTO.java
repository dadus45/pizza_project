package com.app.DTO;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PizzaDTO {
	
	@NotBlank
    private String name;
	// error at deserialization ....so dont use 
	//@NotNull
   // private Price prices;
	private double small;
    private double medium;
    private double large;
//	
	@NotBlank
    private String category;
	
	
    private String image;
	
	@NotBlank
    private String description;

}
