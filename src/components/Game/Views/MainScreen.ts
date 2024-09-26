/** @format */
// @ts-nocheck: Object is possibly 'null'.
import Character from "../Object/Character";
import Map from "../Object/Map";

export default class MainScreen extends Phaser.Scene {
  map: Map;
  player: Character;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Main_Screen");
  }

  preload() {}

  create(data: { mapKey: string; defaultPos: number[]; idleFrame: number }) {
    this.mapKey = data.mapKey || "green_kitchen";
    this.defaultPos = data.defaultPos || null;
    this.idleFrame = data.idleFrame || 0;

    this.map = new Map(this, this.mapKey, this.defaultPos, this.idleFrame);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.fadeIn(2000, 0, 0, 0);
  }

  update() {
    if (this.cursors) {
      this.map.moveChar(this.cursors);
    }
  }
}
