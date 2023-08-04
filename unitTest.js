//const Point = require('./math.js');
//import { Point, Math } from "./math.js";

function test()
{
    document.getElementById("testy").innerHTML = "Hello World";
    alert("testy");
}

function submit(xOne, xTwo, yOne, yTwo)
{
    let one = new Point(xOne.value, xTwo.value);
    let two = new Point(yOne.value, yTwo.value);
    let testM = new Maths();
    let ans = one.getSlope(two);
    document.getElementById("testy").innerHTML = "Answer: " + ans.toString();
    document.getElementById("testy2").innerHTML =  "Slope (negative or positive): " + Math.sign(ans);
    return ans;
}