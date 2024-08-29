/** @format */
"use client";

import Banner from "@/comp/Banner";
import Contact from "@/comp/Contact";
import Project from "@/comp/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Banner />
      <Project />
      <Contact />
    </main>
  );
}
