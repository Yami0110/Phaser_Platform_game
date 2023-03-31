var game;
// vykonanie funkcie pri otvorení webovej stránky
window.onload = function() {
    // vytvorenie konfiguračného objektu
    var config = {
        // zvolenie metódy pre vykresľovanie grafiky
        type: Phaser.AUTO,
        // nastavenie obrazovky
        scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.FIT
        },
        // nastavenie fyzického enginu
        physics: {
            default: "arcade",
            arcade: { gravity: { y: 1500 }, debug: false }
        },
        // vkladanie zoznamu scén
        scene: [
            BootGame, GameTitle, GameTutorial, GameClear, GameOver, Background,
            Level1, Level2, Level3, Level4, Level5, /*Game,*/ PlayerStatus
        ]
    };
    // vytvorenie prázdnej hry
    game = new Phaser.Game(config);
    window.focus();
}