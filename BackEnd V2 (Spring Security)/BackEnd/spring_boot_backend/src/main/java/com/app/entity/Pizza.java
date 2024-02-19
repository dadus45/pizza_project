package com.app.entity;


//{
//    name: "Margherita",
//    varients: ["small", "medium", "large"],
//    prices: [
//      {
//        small: 99,
//        medium: 199,
//        large: 399,
//      },
//    ],
//    category: "veg",
//    image: "/Data/pizza.png",
//    description: "Classic delight with 100% real mozzarella cheese",
//}


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
    
    
    private Double small;
    private Double medium;
    private Double large;
    
    @Column(length = 30)
    private String category;
    
    @Column(length = 30)
    private String image;
    
    @Column(length = 255)
    private String description;

	@Override
	public String toString() {
		return "Pizza [name=" + name + ", prices=" + ", category=" + category + ", image=" + image
				+ ", description=" + description + "]";
	}
    
    

}
