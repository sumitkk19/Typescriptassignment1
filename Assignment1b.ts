


function AreaOfCircle(r: number, PI: number = 3.14): number{
    
    var area = PI * r * r;
    return area;
}

var IRet: number;
IRet = AreaOfCircle(5);
console.log("Area Of Cirlce is" + IRet);