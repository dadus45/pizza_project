package com.app.DTO;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entity.Price;

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
	
	@NotNull
    private double small;
	  private double medium;
	  private double large;
	
	@NotBlank
    private String category;
	
	
    private String image;
	
	@NotBlank
    private String description;

}
