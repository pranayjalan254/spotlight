"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Ticket className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Spotlight</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("events")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              How it Works
            </button>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection("events");
                setIsOpen(false);
              }}
              className="block text-sm hover:text-blue-500 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => {
                scrollToSection("features");
                setIsOpen(false);
              }}
              className="block text-sm hover:text-blue-500 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection("how");
                setIsOpen(false);
              }}
              className="block text-sm hover:text-blue-500 transition-colors"
            >
              How it Works
            </button>
            <Button className="w-full">Connect Wallet</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
