package com.app.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pizza extends BaseEntity {
	
    @Column(length = 30, unique = true)
    private String name;
    
   
    private double small;
    
   
    private double medium;
    
    
    private double large;
    
    
    @Column(length = 30)
    private String category;
    
    @Column(length = 30)
    private String image;
    
    @Column(length = 255)
    private String description;

	@Override
	public String toString() {
		return "Pizza [name=" + name + ", small=" + small + ", medium=" + medium + ", large=" + large + ", category="
				+ category + ", image=" + image + ", description=" + description + "]";
	}

	
    
    

}
