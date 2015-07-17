/**
 * Created by colin on 7/14/15.
 */
//
//var times_two = function(x){
//    return x * 2;
//};
//console.log(times_two(11));
//
//var power = function(base, exponent) {
//    var result = 1;
//    for (var count = 0; count < exponent; count++)
//        result *= base;
//    return result;
//};
//
//console.log(power(11, 3));

/* Global and local functions */
//var o = "Outside!";
//
//var prac = function () {
//    var o = "Inside the function prac";
//};
//
//prac();
//console.log(o);
//
//var prac2 = function () {
//    o = "Inside the function prac2";
//};
//
//prac2();
//console.log(o);

/* Landscape example */
//var landscape = function () {
//    result = "";
//    var flat = function (size) {
//        for (var i = 0; i < size; i++) {
//            result += "_";
//        }
//    };
//
//    var mountain = function (size) {
//        result = "//";
//        for (var i = 0; i < size; i++) {
//            result += "./\\\.";
//            result += "/\\\.";
//        }
//    };
//    flat(2);
//    mountain(1);
//
//    return(result);
//};
//console.log(landscape());

function hello(name) {
    function say_name(name){
        console.log("Hello " + name + " How are you?");
    }
}

var colin = hello("Colin");
console.log(colin());












































