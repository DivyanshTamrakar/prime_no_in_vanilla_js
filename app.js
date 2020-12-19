var input = document.querySelector("#inputt");
var btn = document.querySelector("#btnn");
var output = document.querySelector("#out");
var getinput;
var flag = 0;


btn.addEventListener("click", clickHandler);


function test_prime(n) {

    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}




function clickHandler() {

    getinput = test_prime(input.value);
    

    if (getinput === true) {
        console.log("under if "+ getinput);
        output.innerText = "Number is Prime";
    } 
    if(getinput === false) {
        console.log("under else "+ getinput);
        output.innerText = "Number is not Prime";
    }




}