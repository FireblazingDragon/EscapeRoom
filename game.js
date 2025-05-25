import Room1Scene from './scenes/room1.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Room1Scene]
};

new Phaser.Game(config);
