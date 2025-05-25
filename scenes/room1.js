export default class Room1Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'Room1Scene' });
  }

  preload() {
    this.load.image('room', 'assets/images/room.png');
    this.load.image('key', 'assets/images/key.png');
  }

  create() {
    this.add.image(400, 300, 'room');
    const key = this.add.image(400, 500, 'key').setInteractive();

    key.on('pointerdown', () => {
      this.registry.set('hasKey', true);
      key.setVisible(false);
      alert('You picked up the key!');
    });
  }
}
