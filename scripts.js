var game = function () {
    this.setPlayer1Icon();
    this.setPlayer2Icon();
}
$(document).ready(function () {

    $(".player-icon").on("click", chooseIcon(showGameBoard));
    $("#reset-btn").on("click", resetAll(showGameMenu));
});



function chooseIcon(callback) {
    return function () {




        callback();
    }
}

function resetAll(callback) {
    return function () {




        callback();
    }
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
