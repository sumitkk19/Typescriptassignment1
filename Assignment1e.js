function Fibonacci(no) {
    var no1 = 0;
    var no2 = 1;
    for (var i = 0; i < no; i++) {
        console.log("", no1);
        var num = no1 + no2;
        no1 = no2;
        no2 = num;
    }
}
Fibonacci(21);
