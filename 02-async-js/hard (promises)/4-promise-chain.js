/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve('hm'), 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve('hm'), 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve('hm'), 2000)
    })
}

function calculateTime() {
    startTime = Date.now()
    waitOneSecond()
    .then(() => {
        return waitTwoSecond()
    }).then(() => {
        return waitThreeSecond()
    }).then(() => {
        endTime = Date.now();
        console.log("Execution Time:" + (endTime - startTime))
    })
}
calculateTime();