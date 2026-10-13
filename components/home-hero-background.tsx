"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroPosterUrl, heroVideoUrl } from "@/lib/media";

export function HomeHeroBackground() {
  const reduceMotion = useReducedMotion();
  const backgroundVideo = useRef<HTMLVideoElement>(null);
  const [heroVideoVisible, setHeroVideoVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : true,
  );
  const { scrollYProgress } = useScroll();
  // Keep enough overscan around the fixed video so parallax never exposes the
  // page background at the top or bottom of the viewport.
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsMobile(media.matches);
    updateViewport();
    media.addEventListener("change", updateViewport);
    return () => media.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const heroVideo = document.querySelector("[data-hero-video]");
    if (!heroVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVideoVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(heroVideo);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = backgroundVideo.current;
    if (!video) return;

    if (reduceMotion || isMobile || heroVideoVisible) {
      video.pause();
      return;
    }

    video.play().catch(() => undefined);
  }, [heroVideoVisible, isMobile, reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={heroPosterUrl}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
      </div>
      <motion.div className="absolute -inset-y-[20%] inset-x-0 hidden lg:block" style={{ y: reduceMotion ? 0 : y }}>
        <video
          ref={backgroundVideo}
          className="h-full w-full object-cover object-center opacity-45"
          autoPlay={!reduceMotion && !isMobile && !heroVideoVisible}
          muted
          loop
          playsInline
          preload="none"
          poster={heroPosterUrl}
          aria-hidden="true"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
