function AreaOfCircle(r, PI) {
    if (PI === void 0) { PI = 3.14; }
    var area = PI * r * r;
    return area;
}
var IRet;
IRet = AreaOfCircle(5);
console.log("Area Of Cirlce is" + IRet);
