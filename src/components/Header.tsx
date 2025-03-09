import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Cake Shop
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8">
          <Link
            to="/"
            className="hover:text-accent-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/cakes"
            className="hover:text-accent-foreground transition-colors"
          >
            Cakes
          </Link>
          <Link
            to="/about"
            className="hover:text-accent-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 hover:text-accent-foreground transition-colors" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              3
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
