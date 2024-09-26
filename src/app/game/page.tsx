/** @format */
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GameScreen = dynamic(() => import("../../components/Game/GameScreen"), {
  ssr: false,
});

export default function Game() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[100vw] overflow-hidden">
      {mounted && <GameScreen />}
    </main>
  );
}
