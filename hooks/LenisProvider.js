// components/SmoothScrollProvider.jsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // slower = smoother
      easing: (t) => t, // linear easing = smooth and natural
      smooth: true,
      smoothTouch: true, // optional for touch devices
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
