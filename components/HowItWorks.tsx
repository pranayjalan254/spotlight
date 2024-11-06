"use client";

import { motion } from "framer-motion";
import { Wallet, Ticket, QrCode } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Sign Up",
    description: "A usual signup with email or any of the social providers",
  },
  {
    icon: Ticket,
    title: "Purchase Tickets",
    description:
      "Browse events and purchase NFT tickets with Cards, UPI, NetBanking",
  },
  {
    icon: QrCode,
    title: "Enter Event",
    description:
      "Show your NFT ticket QR code at the venue for instant verification.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="pt-20 min-h-screen animate-section bg-accent/5"
      id="how"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with ticketing in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
