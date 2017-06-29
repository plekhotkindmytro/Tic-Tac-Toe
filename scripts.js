$(document).ready(function () {
    showIconsToChoose();
    $(".player-icon").on("click", savePlayerIcon(showGameBoard));
    $("#reset-btn").on("click", resetAll(showGameMenu));
    $("#game-board tr td").on("click", playSymbol);

});

var icons = ["🐒", "🍌"];
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var result = [0, 0];

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
    board[pos] = game.getPlayer1Icon();

    var winner = getWinner();
    if (winner) {
        alert(winner);
        saveResult(winner);
        clearCells();
    } else if (isTie()) {
        alert("Tie!");
        clearCells();
    } else {
        playComputer();
    }

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
    board[rand] = game.getPlayer2Icon();

    var winner = getWinner();
    if (winner) {
        alert(winner);
        saveResult(winner);
        clearCells();
    } else if (isTie()) {
        alert("Tie!");
        clearCells();
    }
}

function saveResult(winner) {
    var playerIndex = winner === icons[0] ? 0 : 1;
    result[playerIndex] += 1;
    showResult();
}

function showResult() {
    $("#player1-score").text(result[0]);
    $("#player2-score").text(result[1]);
}

var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getWinner() {
    var winner;

    winConditions.some(function (condition) {
        if (isLineCrossed(condition)) {
            winner = board[condition[0]];
            return true;
        }
    });

    return winner;
}

function isTie() {
    var tie = true;
    for (var i = 0; i < board.length; i++) {
        if (board[i] === 0) {
            tie = false;
            break;
        }
    }
    return tie;
}

function isLineCrossed(condition) {
    return board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]];
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
        clearResult();


        callback();
    }
}

function clearResult() {
    result = [0, 0];
    $("#player1-score").text(0);
    $("#player2-score").text(0);
}

function clearCells() {
    $("#game-board tr td").text("");
    $("#game-board tr td").removeClass("filled-cell");
    $("#game-board tr td").removeClass("winning-cell");
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function showGameBoard() {
    clearCells();

    $("#game-menu").hide("fade", {}, "slow", function () {
        $("#game-board").show("fade", {}, "slow", function () {
            if (game.getPlayer1Icon() === icons[1]) {
                setPlayerNames("Computer", "Human");
                playComputer();
            } else {
                setPlayerNames("Human", "Computer");
            }
        });
    });
}

function setPlayerNames(player1, player2) {
    $("#player1-name").text(player1);
    $("#player2-name").text(player2);
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
