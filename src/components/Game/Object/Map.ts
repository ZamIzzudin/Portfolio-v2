/** @format */
// @ts-nocheck: Object is possibly 'null'.

import Character from "./Character";
import MapConfig from "../Config/Map.json";
import PlayableArea from "../Logics/PlayableArea";

export default class Map {
  scene: Phaser.Scene;
  lowerLayer: Phaser.GameObjects.Image;
  upperLayer: Phaser.GameObjects.Image;
  player: Character;

  constructor(
    scene: any,
    type: string,
    defaultPos: number[] | null,
    idleFrame: number
  ) {
    this.scene = scene;
    this.mapConfig = MapConfig[type];
    this.defaultPos = defaultPos;
    this.idleFrame = idleFrame;
    this.playableArea = PlayableArea(this.mapConfig);

    this.lowerLayer = scene.add.image(0, 0, this.mapConfig.lower_map_key);
    this.upperLayer = scene.add.image(0, 0, this.mapConfig.upper_map_key);

    this.lowerLayer.setOrigin(0, 0);
    this.upperLayer.setOrigin(0, 0);

    this.scene.cameras.main.setBounds(
      0,
      0,
      this.lowerLayer.width,
      this.lowerLayer.height
    );

    // Render Player
    this.player = new Character(
      scene,
      this.defaultPos ? this.defaultPos[0] : this.mapConfig.hero_init.def_x,
      this.defaultPos ? this.defaultPos[1] : this.mapConfig.hero_init.def_y,
      "hero",
      "shadow_char",
      this.idleFrame
    );

    // Render NPC
    this.mapConfig.npcs.forEach((npc: any) => {
      new Character(scene, npc.def_x, npc.def_y, npc.sprite_key, "shadow_char");

      const npcCoordinate = `[${npc.def_x},${npc.def_y}]`;

      // Remove NPC Coordinate from Playable Area
      const index = this.playableArea.indexOf(npcCoordinate);
      this.playableArea.splice(index, 1);
    });

    this.upperLayer.setDepth(10);
    this.player.sprite.setDepth(5);
    this.player.shadow.setDepth(5);

    // Toggle untuk menyalakan centered camera pada character (playable / non-playable)
    this.player.centeredCamera();
  }

  moveChar(trigger: any) {
    if (trigger.left.isDown) {
      this.player.moveToTile("x", -1, "left", this.playableArea);
    } else if (trigger.right.isDown) {
      this.player.moveToTile("x", 1, "right", this.playableArea);
    } else if (trigger.up.isDown) {
      this.player.moveToTile("y", -1, "up", this.playableArea);
    } else if (trigger.down.isDown) {
      this.player.moveToTile("y", 1, "down", this.playableArea);
    }

    this.moveScene();
  }

  moveScene() {
    const currentCoordinate = `[${this.player.x},${this.player.y}]`;
    const exitCoordinate = Object.keys(this.mapConfig.related_map);

    if (exitCoordinate.includes(currentCoordinate)) {
      const mapKey = this.mapConfig.related_map[currentCoordinate];
      setTimeout(() => {
        this.scene.scene.start("Main_Screen", {
          mapKey: mapKey.key,
          defaultPos: mapKey.default_pos,
          idleFrame: mapKey.idle_frame,
        });
      }, 250);
    }
  }
}
