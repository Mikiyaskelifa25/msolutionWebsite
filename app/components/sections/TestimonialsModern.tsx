"use client"

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, role, avatar, rating, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
      <blockquote className="text-muted-foreground flex-grow">
        &quot;{content}&quot;
      </blockquote>
    </motion.div>
  );
};

const TestimonialsModern: React.FC = () => {
  const testimonials = [
    {
      content: "The team delivered an exceptional website that perfectly captures our brand identity. Their attention to detail and responsive design has significantly improved our online presence.",
      author: "Sarah Mola",
      role: "Marketing Director",
      avatar: "/avatars/sarah.svg",
      rating: 5
    },
    {
      content: "Working with this team was a game-changer for our business. They understood our needs and created a solution that exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      role: "CEO, TechStart",
      avatar: "/avatars/michael.svg",
      rating: 5
    },
    {
      content: "The modern UI design they created for our application has received overwhelmingly positive feedback from our users. Our conversion rates have increased by 40% since the redesign.",
      author: "Dawit Abera",
      role: "Product Manager",
      avatar: "/avatars/emily.svg",
      rating: 4
    },
    {
      content: "Their team's expertise in responsive design ensured our website looks perfect on every device. The attention to detail and clean code made maintenance a breeze.",
      author: "Tesgaye Yhones",
      role: "CTO, EnterpriseX",
      avatar: "/avatars/placeholder.svg",
      rating: 5
    },
    {
      content: "The custom dashboard they built has streamlined our operations and saved us countless hours. The intuitive interface makes it easy for our entire team to use.",
      author: "Lisa Thompson",
      role: "Operations Manager",
      avatar: "/avatars/placeholder.svg",
      rating: 5
    },
    {
      content: "From concept to completion, the team was professional, responsive, and delivered exactly what we needed. The modern design has helped us stand out in our industry.",
      author: "James Anderson",
      role: "Founder, CreativeStudio",
      avatar: "/avatars/placeholder.svg",
      rating: 4
    },
  ];

  return (
    <section className="py-20 relative" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our solutions and services.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              delay={index}
            />
          ))}
        </div>
        
  
      </div>
    </section>
  );
};

export default TestimonialsModern;