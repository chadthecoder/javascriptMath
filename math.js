class Point
{
    constructor(x, y) //takes two num values for the values of the point
    {
        this.x = x;
        this.y = y;
    }
    getSlope(point2) //takes two points
    {
        let ans = (point2.y-this.y)/(point2.x-this.x)
        return ans;
    }
};

class Maths
{
    constructor()
    {
        //help?
    }
    method(){}
};

//export {Point, Math};