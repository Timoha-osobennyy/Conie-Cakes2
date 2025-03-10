import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm">123 Cake Street, Sweet City</p>
            <p className="text-sm">Email: support@cakeshop.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-primary hover:text-secondary" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-primary hover:text-secondary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-primary hover:text-secondary" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Cake Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;