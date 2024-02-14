import React from 'react'
import "./styles/About.css"

function About() {
  return (
    <div className="pizza-making-guide">
    <h1>Crafting the Perfect Pizza: A Step-by-Step Guide</h1>
    <p className="intro">Welcome to our pizza-making guide! Whether you're a seasoned chef or a cooking enthusiast, creating your own delicious pizza is a rewarding experience. Follow these steps to master the art of pizza-making:</p>

    <div className="step">
    <h2>Step 1: Dough Preparation</h2>
    <p>Begin by crafting the foundation of your pizza: the dough. Mix high-quality flour, water, yeast, a touch of sugar, and a pinch of salt. Knead the dough until it's smooth and elastic. Allow it to rise until doubled in size for an airy and flavorful crust.</p>
    <img src="./Data/Dough.jpg" alt="Dough Preparation" />
      </div>

      <div className="step"> 
    <h2>Step 2: Shaping the Canvas</h2>
    <p>Gently release excess air from the risen dough, then stretch or roll it into your desired pizza shape. Create a classic round pie or embrace your creativity with unique geometrical designs.</p>
    <img src="./Data/Shaping.jpg" alt="Shaping" />
      </div>

    <div className="step">
    <h2>Step 3: Sauce and Cheese Symphony</h2>
    <p>Spread a luscious layer of our signature pizza sauce, leaving a delicate border around the edges. Evenly distribute a lavish amount of premium shredded mozzarella cheese for that quintessential melty goodness.</p>
    <img src="./Data/makingpizza.jpeg" alt="Sauce and Cheese Symphony" />
      </div>

    <div className="step">
    <h2>Step 4: Toppings: Your Culinary Playground</h2>
    <p>Turn your pizza into a masterpiece with an array of fresh toppings. From savory pepperoni to vibrant bell peppers, let your imagination run wild as you layer on ingredients that tantalize your taste buds.</p>
    <img src="./Data/Toppings.jpeg" alt="Topping" />
      </div>

    <div className="step">
    <h2>Step 5: The Art of Baking</h2>
    <p>Elevate your pizza game with proper baking techniques. Preheat your oven to a sizzling 475°F (245°C) to achieve that coveted crispy crust. If you have a pizza stone or pan, preheat it alongside for an authentic pizzeria experience.</p>
    <ul>
      <li>Place your adorned pizza onto a well-floured surface.</li>
      <li>Effortlessly slide it onto the preheated stone or pan in the oven.</li>
      <li>Allow the magic to happen as your creation bakes for around 10-15 minutes. Witness the crust turn golden brown and the cheese become a symphony of bubbling delight.</li>
    </ul>
    <img src="./Data/Baking.jpeg" alt="Baking" />
      </div>


    <div className="step">
    <h2>Step 6: A Culinary Finale</h2>
    <p>As your creation emerges from the oven, it's time for the finishing touches. Drizzle a hint of extra-virgin olive oil for an exquisite sheen and flavor enhancement. Sprinkle aromatic herbs and seasonings, such as oregano and basil, for an aromatic journey.</p>
    <img src="./Data/CulinaryFinale.jpg" alt="Culinary Finale" />
      </div>

    <div className="step">
    <h2>Step 7: The Presentation</h2>
    <p>Allow your freshly baked pizza to cool briefly, ensuring optimal enjoyment. Gently slice your masterpiece into artfully crafted wedges using a professional-grade pizza cutter.</p>
    <img src="./Data/Presentation.jpg" alt="Presentation" />
      </div>

    <div className="step">
    <h2>Indulge in Your Culinary Triumph</h2>
    <p>Savor the fruit of your labor as you indulge in a slice of your very own masterpiece. The blend of flavors and textures is a testament to your culinary prowess. Share your creation with loved ones, and remember—every pizza tells a unique and delectable story.</p>
    <img src="./Data/vegan.jpg" alt="Indulge" />
      </div>
  </div>
  )
}

export default About