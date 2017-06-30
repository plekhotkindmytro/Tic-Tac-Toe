var url = "/tictactoe/sea/stats";
$(document).ready(function () {

    $.get(url, "jsonp").done(function (data) {
            alert("second success");
        }, "jsonp")
        .fail(function (data) {
            alert("error");
        })
        .always(function (data) {
            console.log(data);
        });



});
