var game = function () {
    var player1 = {
        score: 0,
        name: "Player",
        icon: null
    };
    var player2 = {
        score: 0,
        name: "Computer",
        icon: null
    }

    this.setPlayer1Icon = function (icon) {
        player1.icon = icon;
    }
    this.setPlayer2Icon = function (icon) {
        player2.icon = icon;
    }

    this.printGameDebugLog = function () {
        console.log(player1, player2);
    }

}
$(document).ready(function () {

    $(".player-icon").on("click", savePlayerIcon(showGameBoard));
    $("#reset-btn").on("click", resetAll(showGameMenu));
});



function savePlayerIcon(callback) {

    return function () {

        console.log(this);

        callback();
    }
}

function resetAll(callback) {
    return function () {
        clearCells();



        callback();
    }
}

function clearCells() {
    $("#game-board tr td").text("");
}

function showGameBoard() {
    $("#game-menu").hide("fade", {}, "slow", function () {
        $("#game-board").show("fade", {}, "slow");
    });
}

function showGameMenu() {
    $("#game-board").hide("fade", {}, "slow", function () {
        $("#game-menu").show("fade", {}, "slow");
    });
}

var playerSymbol




var menu;
var symbols = ["x", "o"];




var players = []
var player = function (isHuman, symbol, ) {

}
