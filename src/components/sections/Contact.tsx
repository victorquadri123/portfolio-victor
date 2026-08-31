"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/config/data";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-full mb-12">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse" />
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Currently Available For Work</span>
            </div>
            
            <h2 className="text-[10vw] md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12 uppercase mix-blend-difference">
              LET&apos;S <span className="text-primary italic font-serif">BUILD</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
              <MagneticButton asLink href={`mailto:${PERSONAL_INFO.email}`}>
                SEND MESSAGE <ArrowUpRight className="w-4 h-4 ml-2" />
              </MagneticButton>
              
              <MagneticButton asLink href={SOCIAL_LINKS.linkedin} variant="outline">
                LINKEDIN
              </MagneticButton>
            </div>
            
            {/* Minimal Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Email</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-light text-white hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Phone</div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-light text-white hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Location</div>
                <div className="text-lg font-light text-white">{PERSONAL_INFO.location}</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
