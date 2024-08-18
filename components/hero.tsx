import React from 'react'
import { TypewriterEffectDemo } from "@/components/hero-text";
import { HeroHighlight } from "@/components/ui/hero-highlight";

interface HeroProps {
    mode: string
}



const Hero = ({mode}:HeroProps) => {
    return (
        mode === "light" ? (
          <div className="light">
            <HeroHighlight children={<TypewriterEffectDemo />} className="light"/>
          </div>
        ) : (
          <div className="dark">
            <HeroHighlight children={<TypewriterEffectDemo />} className="text-xl text-cyan-200"/>
            
          </div>
        )
            
      
          
        );
}

export default Hero