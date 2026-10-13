"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { heroPosterThumbUrl, heroVideoUrl } from "@/lib/media";

export function CarMotion() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 24 });
  const imageX = useSpring(useTransform(pointerX, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 24 });
  const imageY = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 24 });
  const lensX = useTransform(pointerX, [-0.5, 0.5], [-120, 120]);
  const lensY = useTransform(pointerY, [-0.5, 0.5], [-90, 90]);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointer = () => setHasFinePointer(media.matches);
    updatePointer();
    media.addEventListener("change", updatePointer);
    return () => media.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!inView || reduceMotion) {
      video.pause();
      return;
    }

    video.play()
      .then(() => setShowPlayButton(false))
      .catch(() => setShowPlayButton(true));
  }, [inView, reduceMotion]);

  function trackPointer(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    setActive(false);
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="car-showcase-shell">
      <motion.div
        className="car-showcase"
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
        onPointerMove={trackPointer}
        onPointerEnter={(event) => {
          if (hasFinePointer && event.pointerType === "mouse") setActive(true);
        }}
        onPointerLeave={resetPointer}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
        data-hero-video
      >
        <motion.div
          className="car-showcase__photo"
          style={{ x: imageX, y: imageY }}
          animate={
            reduceMotion || !hasFinePointer
              ? { scale: 1 }
              : active
                ? { scale: 1.08 }
                : inView
                  ? { scale: [1, 1.055] }
                  : { scale: 1 }
          }
          transition={active
            ? { scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            : { scale: { duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay={inView && !reduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPosterThumbUrl}
            aria-hidden="true"
            onPlaying={() => setShowPlayButton(false)}
            onError={() => setShowPlayButton(true)}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        </motion.div>
        <div className="car-showcase__shade" />
        {showPlayButton ? (
          <button
            type="button"
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-zinc-950/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-white hover:bg-zinc-950/90"
            onClick={() => {
              videoRef.current?.play()
                .then(() => setShowPlayButton(false))
                .catch(() => setShowPlayButton(true));
            }}
          >
            Play film
          </button>
        ) : null}
        <motion.div
          className="car-showcase__lens"
          style={{ x: lensX, y: lensY }}
          animate={{ opacity: active && !reduceMotion ? 1 : 0, scale: active && !reduceMotion ? 1 : 0.6 }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />
        <motion.div
          className="car-showcase__beam"
          animate={{ opacity: active && !reduceMotion ? 0.75 : 0, scaleX: active && !reduceMotion ? 1 : 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          aria-hidden="true"
        />
        <div className="car-showcase__topline">
          <span className="car-showcase__brand">M25 <span>MOTORS</span></span>
          <motion.span
            className="car-showcase__mode"
            animate={{ opacity: active ? 1 : 0.72, y: reduceMotion || active ? 0 : 2 }}
          >
            {active ? "DRAG TO EXPLORE" : "CAR CARE IN MOTION"}
          </motion.span>
        </div>
        <div className="car-showcase__bottomline">
          <span className="car-showcase__pulse" />
          <span>SERVICING · DIAGNOSTICS · REPAIRS</span>
          <span className="car-showcase__coordinates">UK</span>
        </div>
      </motion.div>
    </div>
  );
}
