"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "@/config/data";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-end pb-12 pt-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col h-full justify-between">
        
        {/* Top area - Abstract Visual */}
        <div className="flex-1 w-full flex items-center justify-center md:justify-end opacity-60 mix-blend-screen mb-12 relative max-h-[40vh] md:max-h-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-2xl aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10 z-10" />
            <Image 
              src="/images/hero_visual.jpg" 
              alt="Digital Architecture" 
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom area - Typography */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 w-full">
          
          <div className="max-w-4xl flex-1">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                SOFTWARE & WEB DEVELOPER
              </span>
            </motion.div>

            <h1 className="text-[12vw] md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white mb-6 uppercase">
              <Reveal>BUILDING</Reveal>
              <Reveal delay={0.1}>DIGITAL <span className="text-primary italic font-serif pr-4">SYSTEMS</span></Reveal>
            </h1>
          </div>

          <div className="flex flex-col gap-8 max-w-sm shrink-0">
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-balance leading-relaxed">
                {PERSONAL_INFO.description}
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <MagneticButton asLink href="#projects">
                VIEW WORK <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col items-center gap-2 text-muted-foreground/50 z-20"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
