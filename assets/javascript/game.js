$(document).ready(function () {

var crys1Val;
var crys2Val;
var crys3Val;
var randPoint;
var point;
var win = 0;
var loss = 0;
var crys;
var genVal;
var cryst;

//Function to start/reset game
function gameStart() {

    //Reset user point total
    point = 0;

    //Generation of random value for crystals
    function genVal1() {
        crys1Val = Math.floor(Math.random() * 12)
    }
    function genVal2() {
        crys2Val = Math.floor(Math.random() * 12)
    }
    function genVal3() {
        crys3Val = Math.floor(Math.random() * 12)
    }
    genVal1()
    genVal2()
    genVal3()
    console.log(crys1Val)
    console.log(crys2Val)
    console.log(crys3Val)


    //Generation of random point to get
    function genValTotal() {
        randPoint = Math.floor(Math.random() * 120)
        $("#pointsToGet").text(randPoint)
    }
    genValTotal()

}

//Main game loop

gameStart()

//Onclick for crystals to add points
$("#crystal1").on("click", function () {
{
    $("#points").text(point += crys1Val)

    if (point === randPoint) {
        win++
        $("#points").text(0)
        $("#wins").text(win)

        gameStart()

    } else if (point > randPoint) {
        loss++
        point=0
        $("#points").text(0)
        $("#losses").text(loss)
        
    }
}})

$("#crystal2").on("click", function () {
    $("#points").text(point += crys2Val)

    if (point === randPoint) {
        win++
        $("#points").text(0)
        $("#wins").text(win)

        gameStart()

    } else if (point > randPoint) {
        loss++
        point=0
        $("#points").text(0)
        $("#losses").text(loss)
        
    }
})

$("#crystal3").on("click", function () {
    $("#points").text(point += crys3Val)

    if (point === randPoint) {
        win++
        $("#points").text(0)
        $("#wins").text(win)
        gameStart()

    } else if (point > randPoint) {
        loss++
        point=0
        $("#points").text(0)
        $("#losses").text(loss)
        
    }
})
})









