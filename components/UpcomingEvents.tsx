"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Digital Dreams Festival",
    date: "Mar 25, 2024",
    location: "Crypto Arena, Los Angeles",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
    price: "0.5 SOL",
  },
  {
    id: 2,
    title: "Blockchain Beats",
    date: "Apr 15, 2024",
    location: "Meta Stadium, Miami",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60",
    price: "0.3 SOL",
  },
  {
    id: 3,
    title: "NFT Art Gallery",
    date: "May 1, 2024",
    location: "Digital Museum, New York",
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&auto=format&fit=crop&q=60",
    price: "0.2 SOL",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 animate-section" id="events">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Upcoming Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover and secure your spot at the most anticipated events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-accent/50 border-border">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 font-semibold">
                      {event.price}
                    </span>
                    <Button>Get Tickets</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
