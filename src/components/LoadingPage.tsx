/** @format */
"use client";

import { useState, useEffect } from "react";

import Bat from "@/asset/bat.gif";
import Image from "next/image";

export default function LoadingPage() {
  const [isLoading, setLoading] = useState(true);
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    setLoading(true);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3500);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <section
      className={` 
        ${isLoading ? "flex" : "hidden"} 
        ${isShow ? "opacity-100	" : "opacity-0"} 
        top-0 left-0 right-0 bottom-0 flex-col items-center justify-center fixed z-50 duration-500 bg-dark`}
    >
      <Image src={Bat} alt="bat loading pict" width={150} height={150} />
      <h1 className="loading font-highlight">Loading...</h1>
    </section>
  );
}
