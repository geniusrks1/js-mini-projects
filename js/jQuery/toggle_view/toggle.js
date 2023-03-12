var count=0;

$("#toggle").click(function () {

    $("h3").toggleClass("color-white");
    $("body").toggleClass("bck-color-black");
    count++;

    if (count%2!=0) {
        $("#circle").css("margin-left", "100px");
       

    } else {
        $("#circle").css("margin-left", "1px");
    }

});
