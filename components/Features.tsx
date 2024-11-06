"use client";

import { motion } from "framer-motion";
import { Shield, Ticket, RefreshCw, Coins } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Authentic",
    description:
      "NFT-based tickets are impossible to counterfeit, ensuring genuine access to your events.",
  },
  {
    icon: Ticket,
    title: "Easy Transfer",
    description:
      "Transfer or resell tickets securely through our blockchain-powered marketplace.",
  },
  {
    icon: RefreshCw,
    title: "Instant Verification",
    description:
      "Quick and reliable ticket verification at event entry points.",
  },
  {
    icon: Coins,
    title: "Fair & Controlled Resale",
    description:
      "Prevent scalping with controlled resale, ensuring fair and reasonable prices for all fans.",
  },
];

export default function Features() {
  return (
    <section className="py-20 animate-section" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Why Choose Spotlight?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of event ticketing with our
            innovative blockchain solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg card-gradient border border-border"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
