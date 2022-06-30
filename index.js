$(document).ready(function(){
    $("#btn1").click(function(){
        $("#myTable").css("background-color","yellow");
    });
    $("#btn2").click(function(){
        $("#now").css("background-color","blue");
    });
    $("#btn3").click(function(){
        var txt=$("#myTable").text();
        $("#result").html(txt);
    });
    $("#btn4").click(function(){
        $("#myTable").css("display","none");
    });
})