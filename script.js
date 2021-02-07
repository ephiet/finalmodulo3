$(document).ready(function () {
});
//agregar y obtener
$(".agregar").click(function () {
    $(".parrafo1").data("test", "Texto de ejemplo adicional Texto de ejemplo adicional Texto de ejemplo adicional Texto de ejemplo adicional");
    $(".parrafo1-extra").text($(".parrafo1").data("test"));
});
$(".obtener").click(function () {
    alert($(".parrafo1").data("test"))
});
//color
$(".addRojo").click(function () {
    $(".negro").addClass("rojo");
});
//toggle
$(".toggleoffice").click(function () {
    $(".office").slideToggle("slow");
});
//append
$(".append").click(function () {
    $(".appended").append("<p>Texto agregado al final Texto agregado al final Texto agregado al final Texto agregado al final</p>");
});
//devolver valores
$(".volver").click(function () {
    alert($("#devolver").val())
});
//fadeinout
$(".fadeIn").click(function () {
    $(".office2").fadeIn("slow");
});
$(".fadeOut").click(function () {
    $(".office2").fadeOut("slow");
});
//focus
$(".focus").click(function () {
    $("input").focus(function() { 
        $(this).next("span").css("display", "inline"); 
    }); 
}); 
//esconder y mostrar
$(".hide").click(function () {
    $(".escondido").hide();
});
$(".show").click(function () {
    $(".escondido").show();
});
//slideupdownD
$(".slideUp").click(function () {
    $(".slider").slideUp();
});
$(".slideDown").click(function () {
    $(".slider").slideDown();
});