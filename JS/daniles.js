

let { top: aboutSection } = $("#about").offset();

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop();

    console.log(windowOffset);

    if (windowOffset > aboutSection - 200) {
        $("#navbar").css("background-color", "black");
    } else {
        $("#navbar").css("background-color", "transparent")
    }

})