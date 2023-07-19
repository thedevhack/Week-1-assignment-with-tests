/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function printSomething(){
    console.log("Something");
    return 5;
}

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    })
}

wait(5).then(printSomething).then((t) => {console.log(t)})