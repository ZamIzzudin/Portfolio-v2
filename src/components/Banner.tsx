/** @format */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import Persona from "@/asset/banner.gif";

export default function Banner() {
  const $follower = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo($follower.current, "x", {
        duration: 0.6,
        ease: "power3",
      });

      const yTo = gsap.quickTo($follower.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-w-w-screen min-h-screen flex items-center flex-col justify-center py-10 relative overflow-hidden"
    >
      <div
        ref={$follower}
        className="aspect-square min-h-h-half absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 blur-2xl"
      >
        <div className="min-h-h-half aspect-square bg-salmon rounded-full animate-spin-slow bg-purple-gradient opacity-50"></div>
      </div>
      {/* Masking */}
      <div className="inside-mask font-highlight">
        <div
          className="roller-text"
          style={{ transform: `translateX(${-scrollY / 20}%)` }}
        >
          <span>AZZAM</span>
          <span>IZZUDIN</span>
          <span>AZZAM</span>
          <span>IZZUDIN</span>
        </div>
        <div
          className="roller-text2"
          style={{ transform: `translateX(${scrollY / 20}%)` }}
        >
          <span>WEB</span>
          <span>DEVELOPER</span>
          <span>WEB</span>
          <span>DEVELOPER</span>
        </div>
      </div>
      <div className="outside-mask font-highlight">
        <div
          className="roller-text"
          style={{ transform: `translateX(${-scrollY / 20}%)` }}
        >
          <span>AZZAM</span>
          <span>IZZUDIN</span>
          <span>AZZAM</span>
          <span>IZZUDIN</span>
        </div>
        <div
          className="roller-text2"
          style={{ transform: `translateX(${scrollY / 20}%)` }}
        >
          <span>WEB</span>
          <span>DEVELOPER</span>
          <span>WEB</span>
          <span>DEVELOPER</span>
        </div>
      </div>
      <Image
        className="layer-image"
        src={Persona}
        alt="banner pict"
        width={500}
        height={500}
      />
    </section>
  );
}
