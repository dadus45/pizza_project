package com.app.DTO;

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
public class PizzaUpdateDto {
	@NotBlank
private String name;
	@NotNull
	private double small;
	private double medium;
	private double large;
	
	@NotBlank
	private String description;
}
