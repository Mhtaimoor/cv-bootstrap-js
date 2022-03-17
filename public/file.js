$(document).ready(function () {

    $("#name").click(function(){
        $("#panel").slideToggle("slow");
    });

    $(".arrow").click(function(){
        $(".content").slideToggle("slow");
    });

    $(".arrow-ed").click(function(){
        $(".content-ed").slideToggle("slow");
    });

    $(".arrow-sk").click(function(){
        $(".content-sk").slideToggle("slow");
    });

    $(".arrow-at").click(function(){
        $(".content-at").slideToggle("slow");
    });

    $(".arrow-l").click(function(){
        $(".content-l").slideToggle("slow");
    });

    $(".arrow-side").click(function(){
        $(".content-side").slideToggle("slow");
    });
});