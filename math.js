class Point
{
    constructor(x, y) //takes two num values for the values of the point
    {
        this.x = x;
        this.y = y;
    }
    method_1() {  }
};

class Maths
{
    constructor()
    {
        //help?
    }
    getSlope(one, two) //takes two points
    {
        let ans = (two.y-one.y)/(two.x-one.x)
        return ans;
    }
};

//export {Point, Math};