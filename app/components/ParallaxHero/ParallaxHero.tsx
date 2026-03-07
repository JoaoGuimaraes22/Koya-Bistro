"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          el.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={imgRef} className="absolute inset-0 will-change-transform">
      <Image
        src="/img/hero.jpg"
        alt="Koya's — fresh lemonade on the terrace"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
