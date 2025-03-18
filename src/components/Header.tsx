import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-md animate-fade-in">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold animate-fade-in-left">
          Cake Shop
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8">
          <Link
            to="/"
            className="hover:text-accent-foreground transition-colors animate-fade-in-up delay-100"
          >
            Home
          </Link>
          <Link
            to="/cakes"
            className="hover:text-accent-foreground transition-colors animate-fade-in-up delay-200"
          >
            Cakes
          </Link>
          <Link
            to="/about"
            className="hover:text-accent-foreground transition-colors animate-fade-in-up delay-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent-foreground transition-colors animate-fade-in-up delay-400"
          >
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative animate-fade-in-right">
            <ShoppingCart className="h-6 w-6 hover:text-accent-foreground transition-colors hover:animate-pulse" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground animate-pulse">
              3
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden animate-fade-in-right delay-200"
            aria-label="Open Menu"
          >
            <span className="sr-only">Open Menu</span>
            <div className="space-y-1">
              <div className="h-1 w-6 bg-primary-foreground rounded"></div>
              <div className="h-1 w-6 bg-primary-foreground rounded"></div>
              <div className="h-1 w-6 bg-primary-foreground rounded"></div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;