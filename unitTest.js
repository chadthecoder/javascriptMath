const Point = require('./math.js');
const Math = require('./math.js');

function test()
{
    document.getElementById("testy").innerHTML = "Hello World";
    alert("testy");
}

function submit(oneX, oneY, twoX, twoY)
{
    let one = new Point(oneX, oneY);
    let two = new Point(twoX, twoY);
    let testM = new Math();
    let ans = testM.getSlope(one, two);
    document.getElementById("testy").innerHTML = "Hello World";
    alert("HI");
    return ans;
}