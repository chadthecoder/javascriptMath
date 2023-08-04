//const Point = require('./math.js');
//import { Point, Math } from "./math.js";

function test()
{
    document.getElementById("testy").innerHTML = "Hello World";
    alert("testy");
}

function submit(oneX, oneY, twoX, twoY)
{
    let one = new Point(oneX.value, oneY.value);
    let two = new Point(twoX.value, twoY.value);
    let testM = new Math();
    let ans = testM.getSlope(one, two);
    document.getElementById("testy").innerHTML = "Answer: " + ans.toString();
    return ans;
}