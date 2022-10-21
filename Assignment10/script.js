/* focus event */

function focusevent() {
    document.getElementById("input").style.background = "aqua";
}

/*Hover event */
function f1() {
    document.getElementById("hover").innerHTML = "This is Factorial Button"
}
function f2() {
    document.getElementById("hover").innerHTML = "This is Natural Numbers Button"
}
function f3() {
    document.getElementById("hover").innerHTML = "This is Prime Numbers Button"
}
function f4() {
    document.getElementById("hover").innerHTML = "This is Fibonacci Series Button"
}

var fact = document.getElementById("fact");
var nat = document.getElementById("nat");
var prime = document.getElementById("prime");
var fib = document.getElementById("fib");

fact.addEventListener('mouseover', f1);
nat.addEventListener('mouseover', f2);
prime.addEventListener('mouseover', f3);
fib.addEventListener('mouseover', f4);

/*Calculaton functions */

function factorial() {
    let a = document.getElementById("input").value;
    let f = 1;
    for (i = 1; i <= a; i++) {
        f = f * i;
    }
    alert("The result will be displayed below");
    document.getElementById("result").innerHTML = "The factorial of " + a + " is " + f;
}

function natural() {
    let arr = new Array();
    let a = document.getElementById("input").value;
    for (i = 1; i <= a; i++) {
        arr[i - 1] = i;
    }
    alert("The result will be displayed below");
    document.getElementById("result").innerHTML = "The natural numbers till " + a + " are " + arr;

}

function fibo() {
    let arr = new Array();
    let a = document.getElementById("input").value;
    arr[0] = 0;
    arr[1] = 1;
    for (i = 2; i <= a; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    alert("The result will be displayed below");
    document.getElementById("result").innerHTML = "The fibonacci series till " + a + " terms are " + arr;
}

function primeno() {
    let a = document.getElementById("input").value;
    let v = 0;
    for (i = 2; i <= a / 2; i++) 
    {
        if (a % i == 0) 
        {
            v = 1;
        }
    }
    alert("The result will be displayed below");
    if (v == 0) {
        document.getElementById("result").innerHTML = a + " is a prime number."
    }
    else {
        document.getElementById("result").innerHTML = a + " is not a prime number."
    }
}




