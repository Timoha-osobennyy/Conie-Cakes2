import React from "react";
import { CakeCard } from "@/components/CakeCard";
import { cakes } from "@/data/cakes";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="hero-section">
        <h2><span>Welcome to Conie Cakes!</span></h2>
        <p>Discover our handcrafted cakes made with love and the finest ingredients.</p>
      </section>

      <section id="cakes">
        <h2>Our Signature Cakes</h2>
        <div className="cake-list">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>📍Antofagasta, Chile
        🧁Artisanal pastries
        💗Traditional and sugar-free cakes
        📩 Questions or orders to DM</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:info@coniecakes.com">info@coniecakes.com</a></p>
          <p><i className="fas fa-phone"></i> Phone: <a href="tel:+71234567890">+7 123 456 7890</a></p>
        </div>
      </section>
      
      <div className="social-icons">
        <a href="https://www.instagram.com/conie_cakes" target="_blank" className="icon instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" className="icon facebook">
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>
    </main>
  );
}