"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const typingSpeed = 100; // ms per character
const deletingSpeed = 50; // ms per character
const delayBetweenWords = 1500; // ms

const words = ["Web Developer"];

const TypingEffect: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timer: NodeJS.Timeout;

    if (deleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text.length < word.length) {
        timer = setTimeout(() => {
          setText(word.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setDeleting(true);
        }, delayBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <motion.div
      className="text-xl md:text-2xl lg:text-3xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

export default TypingEffect;
