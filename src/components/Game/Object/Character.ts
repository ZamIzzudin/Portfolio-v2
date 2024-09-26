/** @format */
// @ts-nocheck: Object is possibly 'null'.

export default class Character {
  scene: Phaser.Scene;
  sprite: Phaser.GameObjects.Sprite;
  shadow: Phaser.GameObjects.Image;
  isMoving: boolean;
  texture: string;
  x: number;
  y: number;
  isCentered: boolean;

  constructor(
    scene: any,
    x: number,
    y: number,
    texture: any,
    shadowTexture: string,
    idle: number | 0
  ) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.texture = texture;
    this.isCentered = false;

    this.shadow = scene.add.image(
      this.x * 16 - 8,
      this.y * 16 - 18,
      shadowTexture
    );
    this.sprite = scene.add.sprite(
      this.x * 16 - 8,
      this.y * 16 - 18,
      texture,
      idle
    );

    this.sprite.setOrigin(0, 0);
    this.shadow.setOrigin(0, 0);

    this.isMoving = false;
  }

  moveToTile(cor: string, val: number, idle: string, playableArea: string[]) {
    if (this.isMoving) return;

    this.isMoving = true;

    switch (idle) {
      case "left":
        this.sprite.anims.play("walk-left-" + this.texture, true);
        break;
      case "right":
        this.sprite.anims.play("walk-right-" + this.texture, true);
        break;
      case "up":
        this.sprite.anims.play("walk-up-" + this.texture, true);
        break;
      case "down":
        this.sprite.anims.play("walk-down-" + this.texture, true);
        break;
    }

    let x = cor === "x" ? this.x + val : this.x;
    let y = cor === "y" ? this.y + val : this.y;

    const coordinate = `[${x},${y}]`;

    if (playableArea.includes(coordinate)) {
      this.x = x;
      this.y = y;
    }

    // Move Character
    this.scene.tweens.add({
      targets: [this.shadow, this.sprite],
      x: this.x * 16 - 8,
      y: this.y * 16 - 18,
      duration: 250,
      onComplete: () => {
        this.isMoving = false;
        this.sprite.anims.stop();

        if (idle === "up") {
          this.sprite.setFrame(8);
        } else if (idle === "down") {
          this.sprite.setFrame(0);
        } else if (idle === "left") {
          this.sprite.setFrame(12);
        } else if (idle === "right") {
          this.sprite.setFrame(4);
        }
      },
    });
  }

  centeredCamera() {
    if (this.isCentered) {
      this.scene.cameras.main.stopFollow(this.sprite);
    } else {
      this.scene.cameras.main.startFollow(this.sprite);
    }
  }
}
