import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        "Welcome to Desi Pizza, where passion meets flavor! Our journey 
        began with a simple idea: to craft the most delicious pizzas using
        authentic Desi spices and flavors. Each pizza is a celebration of our
        heritage,made with fresh, high-quality ingredients sourced locally. At
        Desi Pizza, we believe in creating more than just a meal; we aim to
        create an experience that delights your taste buds and warms your
        heart.Whether you're craving a classic Margherita or feeling
        adventurous with our spicy Tikka Masala pizza, we have something for 
        everyone. Our commitment to quality extends beyond our pizzas. We strive to 
        provide exceptional service, ensuring every order is made with care and
        delivered with a smile. Join us on a culinary journey that blends 
        tradition with innovation, and discover why Desi Pizza is not just a
        meal, but a celebration of flavor!"
        </p>
      </div>
    </div>
  );
}

export default About;
