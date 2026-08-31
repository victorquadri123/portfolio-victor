"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  asLink?: boolean;
  href?: string;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  asLink = false,
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium tracking-wide transition-all duration-300 px-8 py-4 z-10 w-full sm:w-auto";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "bg-transparent border border-surface-border text-foreground hover:border-primary/50",
    ghost: "bg-transparent text-foreground hover:text-primary",
  };

  const ButtonContent = () => (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      className={cn("relative flex items-center justify-center", isMobile ? "w-full" : "w-auto")}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && !isMobile && (
          <motion.div
            className="absolute inset-0 bg-white/20 z-0 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            style={{ originX: 0.5, originY: 0.5 }}
          />
        )}
      </motion.div>
    </div>
  );

  if (asLink && href) {
    return (
      <a href={href} className={cn(isMobile ? "w-full block" : "inline-block")}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button {...props} className={cn("p-0 bg-transparent border-none", isMobile ? "w-full" : "")}>
      <ButtonContent />
    </button>
  );
}
