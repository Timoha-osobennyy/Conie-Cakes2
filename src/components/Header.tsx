import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "@/components/Cart";

export function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1><Link to="/"><span>Conie Cakes</span></Link></h1>
        
        <div className="flex items-center">
          <nav aria-label="Main navigation">
            <ul className="ulnav">
              <li><a href="#home" aria-current="page">Home</a></li>
              <li><a href="#cakes">Our Cakes</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="ml-4">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}