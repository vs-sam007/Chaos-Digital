"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();
  
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      
      const updateFn = (time: number) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(updateFn);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(updateFn);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);
  
  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <ScrollRestoration />
      {children as any}
    </ReactLenis>
  );
}
