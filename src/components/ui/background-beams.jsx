"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black/0" />
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z' fill='%2300FF9F' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
        className="absolute inset-0 opacity-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
      />
    </div>
  );
}; 