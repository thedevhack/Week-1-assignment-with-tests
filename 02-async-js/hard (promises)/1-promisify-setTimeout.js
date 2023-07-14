/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseBody(resolve){
    setTimeout(resolve, 1000);

}

function printSomething(){
    console.log("Something");
}

function wait(n) {
    return new Promise(promiseBody)
}

wait(5).then(printSomething)