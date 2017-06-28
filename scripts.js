$(document).ready(function () {
    showIconsToChoose();
    $(".player-icon").on("click", savePlayerIcon(showGameBoard));
    $("#reset-btn").on("click", resetAll(showGameMenu));
    $("#game-board tr td").on("click", playSymbol);

});

var icons = ["🐒", "🍌"];
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    this.getPlayer2Icon = function () {
        return player2.icon;
    }

    this.printGameDebugLog = function () {
        console.log(player1, player2);
    }

}

var game = new Game();

function playSymbol() {
    $(this).html(game.getPlayer1Icon());
    var pos = $(this).attr("id");
    $("#" + pos).addClass("filled-cell");
    board[pos] = 1;

    playComputer();
}

function playComputer() {
    var clearBoard = board.reduce(function (prev, curr, i) {
        if (curr === 0) {
            prev.push(i);
        }

        return prev;
    }, []);

    var rand = clearBoard[Math.floor(Math.random() * clearBoard.length)];
    console.log(rand);
    $("#" + rand).html(game.getPlayer2Icon());
    $("#" + rand).addClass("filled-cell");
    board[rand] = 2;
}

function savePlayerIcon(callback) {

    return function () {

        var player1Icon = $(this).text();
        var player2Icon = player1Icon === icons[0] ? icons[1] : icons[0];
        game.setPlayer1Icon(player1Icon);
        game.setPlayer2Icon(player2Icon);

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
    $("#game-board tr td").removeClass("filled-cell");
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

function showIconsToChoose() {

    var iconsTemplate = '<span class="player-icon">{icon1}</span> or <span class="player-icon">{icon2}</span>';
    iconsTemplate = iconsTemplate.replace("{icon1}", icons[0]).replace("{icon2}", icons[1]);
    $("#icons").html(iconsTemplate);
}
