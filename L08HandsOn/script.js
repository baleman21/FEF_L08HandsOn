$(document).ready(function () {
    h1Hover();
    pClick();
    dblCLickLi();
    inputRed();
});

const h1Hover = () => {
    $("h1").hover(function () {
        $(this).css("color", "red");
    }, function () {
        $(this).css("color", "black");
    });
}

const pClick = () => {
    $("p").click(function () {
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
}

const dblCLickLi = () => {
    $("li").dblclick(function () {
        $(this).hide();
    });
}

const inputRed = () => {
    $("input").keydown(function() {
        $(this).toggleclass("input");
    });
}