import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@coniecakes.com" className="text-sm hover:underline">info@coniecakes.com</a>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Phone className="h-4 w-4" />
              <a href="tel:+71234567890" className="text-sm hover:underline">+7 (123) 456-7890</a>
            </div>
            <p className="text-sm mt-1">123 Cake Street, Sweet City</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
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