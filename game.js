
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // 에셋 로드
}

function create() {
    // 게임 오브젝트 설정
}

function update() {
    // 게임 루프 로직
}
Phaser.js를 사용하여 간단한 2D 횡스크롤링 총알 피하기 게임을 구현해보겠습니다.

```javascript
// Phaser 게임 설정
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var bullets;
var cursors;
var enemies;

function preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('enemy', 'assets/enemy.png');
}

function create() {
    player = this.physics.add.sprite(400, 550, 'player');
    bullets = this.physics.add.group();
    enemies = this.physics.add.group();

    this.physics.add.collider(bullets, enemies, bulletHitEnemy, null, this);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    }

    if (cursors.space.isDown) {
        fireBullet();
    }

    if (Phaser.Math.Between(0, 100) < 2) {
        spawnEnemy();
    }
}

function fireBullet() {
    var bullet = bullets.create(player.x, player.y, 'bullet');
    bullet.setVelocityY(-400);
}

function spawnEnemy() {
    var enemy = enemies.create(Phaser.Math.Between(0, 800), 0, 'enemy');
    enemy.setVelocityY(Phaser.Math.Between(50, 100));
}

function bulletHitEnemy(bullet, enemy) {
    bullet.destroy();
    enemy.destroy();
}
```

이 예제에서는 플레이어가 화살표 키로 이동하고 스페이스 바를 눌러 총알을 발사하며, 일정 간격으로 적이 생성됩니다. 만약 총알이 적에 닿으면 총알과 적이 사라지는 간단한 게임 전반을 구현했습니다. 이 코드를 기반으로 게임을 확장하고 추가 요소를 구현할 수 있습니다.