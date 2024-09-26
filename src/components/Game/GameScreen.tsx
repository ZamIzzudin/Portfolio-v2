/** @format */
"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import Preloader from "./Views/Preloader";
import MainScreen from "./Views/MainScreen";

export default function GameScreen() {
  const gameContainer = useRef(null);

  useEffect((): any => {
    const config = {
      type: Phaser.AUTO,
      parent: gameContainer.current,
      pixelArt: true,
      width: 352,
      height: 192,
      backgroundColor: "#87CEEB",
      disableContextMenu: true,
      roundPixels: true,
      scene: [Preloader, MainScreen],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);
  return <div className="game-container" ref={gameContainer}></div>;
}
