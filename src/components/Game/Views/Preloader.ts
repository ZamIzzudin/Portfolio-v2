/** @format */

import Phaser from "phaser";
import createAnimation from "../Logics/MoveAnimation";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        color: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        color: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", (value: number) => {
      percentText.setText((value * 100).toFixed(2) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // Preload Map
    this.load.image("demo_low", "/game/images/maps/DemoLower.png");
    this.load.image("demo_up", "/game/images/maps/DemoUpper.png");
    this.load.image("kitc_low", "/game/images/maps/KitchenLower.png");
    this.load.image("kitc_up", "/game/images/maps/KitchenUpper.png");
    this.load.image("dine_low", "/game/images/maps/DiningRoomLower.png");
    this.load.image("dine_up", "/game/images/maps/DiningRoomUpper.png");
    this.load.image("g_kitc_low", "/game/images/maps/GreenKitchenLower.png");
    this.load.image("g_kitc_up", "/game/images/maps/GreenKitchenUpper.png");
    this.load.image("str_low", "/game/images/maps/StreetLower.png");
    this.load.image("str_up", "/game/images/maps/StreetUpper.png");
    this.load.image("str_n_low", "/game/images/maps/StreetNorthLower.png");
    this.load.image("str_n_up", "/game/images/maps/StreetNorthUpper.png");
    this.load.image("p_shop_low", "/game/images/maps/PizzaShopLower.png");
    this.load.image("p_shop_up", "/game/images/maps/PizzaShopUpper.png");

    // Preload Char
    this.load.image("shadow_char", "/game/images/characters/shadow.png");
    this.load.spritesheet("hero", "/game/images/characters/people/hero.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("npc1", "/game/images/characters/people/npc1.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    // character texture list
    const chars = ["hero", "npc1"];

    // Initiate animation creation
    chars.forEach((char) => {
      createAnimation(this.scene.scene, char);
    });

    this.scene.start("Main_Screen");
  }
}
