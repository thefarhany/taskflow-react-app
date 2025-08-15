import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold text-xl">TaskFlow</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Simplify your tasks. Organize your life.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-primary">
            🐦
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary">
            💼
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-primary">
            💻
          </a>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
