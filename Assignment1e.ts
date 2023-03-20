


function Fibonacci(no) {
   
    let no1 = 0;
    let no2 = 1;

    for (let i = 0; i < no; i++){
        console.log("", no1);
        let num = no1 + no2;
        no1 = no2;
        no2 = num;

    }
}
Fibonacci(21);