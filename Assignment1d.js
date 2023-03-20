function ChkPrime(no1) {
    var no2 = 0;
    for (var i = 2; i <= no1; i++) {
        if (no1 % i == 0) {
            no2 = 1;
        }
    }
    if (no2 == 1) {
        console.log("It is prime number");
    }
    else {
        console.log("It is not a prime number");
    }
}
ChkPrime(11);
