$(document).ready(function () {
    $("#game-menu").on("click", function () {
        $("#game-menu").hide("fade", {}, "slow", function () {
            $("#game-board").show("fade", {}, "slow");
        });

    });
});




var game;
var menu;
var symbols = ["x", "o"];




var players = []
var player = function (isHuman, symbol, ) {

}
