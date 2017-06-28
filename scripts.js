var monkey = creatures.reduce(function (prev, curr) {
    if (curr.name === "monkey") {
        return curr.sign;
    }
    return prev;
});

var banana = food.reduce(function (prev, curr) {
    if (curr.name === "banana") {
        return curr.sign;
    }
    return prev;
});

var icons = [monkey, banana];
var iconsTemplate = '<span class="player-icon">{icon1}</span> or <span class="player-icon">{icon2}</span>';



$(document).ready(function () {
    iconsTemplate = iconsTemplate.replace("{icon1}", icons[0]).replace("{icon2}", icons[1]);
    $("#icons").html(iconsTemplate);

    $(".player-icon").on("click", savePlayerIcon(showGameBoard));
    $("#reset-btn").on("click", resetAll(showGameMenu));
    $("#game-board tr td").on("click", playSymbol)

});

var Game = function () {
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

    this.getPlayer1Icon = function () {
        return player1.icon;
    }

    this.getPlayer2Icon = function (icon) {
        return player2.icon;
    }

    this.printGameDebugLog = function () {
        console.log(player1, player2);
    }

}

var game = new Game();

function playSymbol() {
    $(this).text(game.getPlayer1Icon());
}


function savePlayerIcon(callback) {

    return function () {

        game.setPlayer1Icon($(this).text());

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
    clearCells();

    $("#game-menu").hide("fade", {}, "slow", function () {
        $("#game-board").show("fade", {}, "slow");
    });
}

function showGameMenu() {
    $("#game-board").hide("fade", {}, "slow", function () {
        $("#game-menu").show("fade", {}, "slow");
    });
}
