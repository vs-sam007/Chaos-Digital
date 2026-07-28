"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
}

const ParticleMorph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      // We don't re-init fully here to avoid jarring resets, just update bounds
    };

    window.addEventListener("resize", resize);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let particles: Particle[] = [];
    let animationFrameId: number;

    const texts = [
      "CHAOS", 
      "Web Dev",
      "SEO",
      "AI Automations",
      "Brand Strategy",
      "Growth Systems",
      "UI/UX Design",
      "App Dev",
      "PPC Campaigns",
      "Content Creation",
      "E-commerce"
    ];

    let currentTextIndex = 0;
    
    const createTargetPixels = (text: string) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const oCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!oCtx) return [];

      oCtx.fillStyle = "white";
      oCtx.textAlign = "center";
      oCtx.textBaseline = "middle";
      
      let fontSize = width > 800 ? 240 : (width > 400 ? 140 : 80);
      if (text !== "CHAOS") {
        fontSize = width > 800 ? 160 : (width > 400 ? 100 : 60);
      }
      
      oCtx.font = `900 ${fontSize}px Inter, sans-serif`;
      
      // Scale down if text is too wide for the canvas
      const textWidth = oCtx.measureText(text).width;
      const maxWidth = width * 0.9; // 90% of canvas width
      if (textWidth > maxWidth) {
        fontSize = Math.floor(fontSize * (maxWidth / textWidth));
        oCtx.font = `900 ${fontSize}px Inter, sans-serif`;
      }
      
      oCtx.fillText(text, width / 2, height / 2);

      const imageData = oCtx.getImageData(0, 0, width, height).data;
      const targets = [];
      const density = 4; // Particle density (lower = more particles)

      for (let y = 0; y < height; y += density) {
        for (let x = 0; x < width; x += density) {
          const i = (y * width + x) * 4;
          if (imageData[i + 3] > 128) {
            targets.push({
              x: x,
              y: y,
              color: text === "CHAOS" ? "#6C5CE7" : "#8B5CF6"
            });
          }
        }
      }
      
      return targets;
    };

    const initAnimation = () => {
      const targets = createTargetPixels(texts[0]);
      particles = targets.map((t) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: t.x,
        originY: t.y,
        color: t.color,
        size: Math.random() * 2 + 1,
        vx: 0,
        vy: 0,
        alpha: 0
      }));
      
      // Fade in particles
      gsap.to(particles, {
        alpha: 1,
        duration: 2,
        stagger: 0.0005,
        ease: "power2.inOut"
      });
      
      scheduleNextTransition();
    };

    let transitionTimeout: NodeJS.Timeout;

    const scheduleNextTransition = () => {
      transitionTimeout = setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        const newTargets = createTargetPixels(texts[currentTextIndex]);
        
        // Match particles to new targets
        if (newTargets.length > particles.length) {
          const diff = newTargets.length - particles.length;
          for (let i = 0; i < diff; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              originX: newTargets[particles.length - 1].x, // Default
              originY: newTargets[particles.length - 1].y,
              color: newTargets[particles.length - 1].color,
              size: Math.random() * 2 + 1,
              vx: 0,
              vy: 0,
              alpha: 0
            });
          }
        } else if (newTargets.length < particles.length) {
          for (let i = newTargets.length; i < particles.length; i++) {
             particles[i].originX = Math.random() * width;
             particles[i].originY = Math.random() * height;
             particles[i].alpha = 0; 
          }
        }
        
        // Update origin points for morphing
        for (let i = 0; i < newTargets.length; i++) {
          particles[i].originX = newTargets[i].x;
          particles[i].originY = newTargets[i].y;
          particles[i].color = newTargets[i].color;
          particles[i].alpha = 1;
        }
        
        scheduleNextTransition();
      }, 3500); 
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Easing towards target
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        p.x += dx * 0.05; 
        p.y += dy * 0.05;

        // Mouse interaction
        const mdx = mouseRef.current.x - p.x;
        const mdy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x -= (mdx / dist) * force * 5;
          p.y -= (mdy / dist) * force * 5;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    initAnimation();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(transitionTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full pointer-events-auto" />
    </div>
  );
};

export default ParticleMorph;
