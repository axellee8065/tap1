Phaser.js를 사용하여 HTML5 게임의 세 가지 씬(메인 메뉴, 게임플레이, 게임 오버)을 생성하는 방법을 안내해 드리겠습니다.

먼저, Phaser.js 라이브러리를 HTML 파일에서 불러온 후 아래와 같은 코드를 사용하여 각각의 씬을 생성할 수 있습니다.

```javascript
// 게임 화면 크기
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// 각 씬에 대한 함수 정의
function preload() {
    this.load.image('background', 'assets/background.png');
    // 필요한 이미지, 스프라이트 등을 미리 로드할 수 있습니다.
}

function create() {
    this.add.image(400, 300, 'background');
    // 씬이 처음 생성될 때 실행되는 코드를 작성할 수 있습니다.
}

function update() {
    // 게임 루프에서 호출할 업데이트 로직을 작성할 수 있습니다.
}

// 메인 메뉴 씬
class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(400, 300, 'Main Menu', { fontSize: '32px', fill: '#fff' });
        // 메인 메뉴 화면 생성
    }
}

// 게임 플레이 씬
class GamePlayScene extends Phaser.Scene {
    constructor() {
        super('GamePlay');
    }

    create() {
        this.add.text(400, 300, 'Game Play', { fontSize: '32px', fill: '#fff' });
        // 게임 플레이 화면 생성
    }
}

// 게임 오버 씬
class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        this.add.text(400, 300, 'Game Over', { fontSize: '32px', fill: '#fff' });
        // 게임 오버 화면 생성
    }
}

game.scene.add('MainMenu', MainMenuScene);
game.scene.add('GamePlay', GamePlayScene);
game.scene.add('GameOver', GameOverScene);

game.scene.start('MainMenu');
```

위 코드는 간단한 Phaser.js 게임을 만드는 예시입니다. 각각의 씬에서는 해당하는 화면을 생성하고 게임 루프에서 업데이트 로직을 처리합니다. 사용자가 각각의 씬으로 전환할 때는 `game.scene.start('SceneName')`을 사용하면 됩니다.

이 코드를 HTML 파일에 추가하여 Phaser.js를 통해 메인 메뉴, 게임 플레이, 게임 오버 씬을 구현할 수 있습니다.