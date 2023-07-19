//----------------------
// 1
// function somefunc(){
//     console.log("Hmmmmmmmmmmmmm............")
// }


// function HigherOrder(func){
//     func();
// }

// HigherOrder(somefunc)

//-----------------------
// 2
// function HigherOrderAsync(func){
//     const d = new Date();
//     let date = d.getUTCDate();
//     setTimeout(func, date * 1000)
// }
// HigherOrderAsync(() => {console.log("HigherOrderAsync")})

// 3 - using forEach function of internal libraries

// function callbackFn(n){
//     return n*n;
// }


// function mapArray(arr, callbackFn){
//     newArr = []
//     function xyz(element, index, arr){
//         console.log(arr, element, index)
//         arr[index] = callbackFn(element)
//     }
    
//     arr.forEach(xyz);
//     return newArr;
// }
// arr = [1, 2, 3]
// console.log(mapArray(arr, callbackFn))
// console.log(arr)

// 3 - using map function of internal libraries

// function callbackFn(ele){
//     return ele * ele;
// }

// function mapArray(arr, callbackFn){
//     return arr.map((callbackFn))
// }
// console.log(mapArray([1,2,3,4], callbackFn))

// 4 - 

// function ageVerifier(element, index, array){
//     if (element > 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// function filterArray(arr, callbackFn){
//     return arr.filter(callbackFn)
// }
// console.log(filterArray([15, 78, 45, 5], ageVerifier))

// 5 - 
// const fs = require('fs');
// function callbackFn(contents){
//     console.log(contents);
// }
// function readFileCallBack(file, callbackFn){
//     fs.readFile(file, "utf8" ,(err, data) => {
//         if (!err){
//             callbackFn(data)
//         }
//     })
// }
// readFileCallBack('readFileContents.txt', callbackFn);

//6 - 
// const fs = require('fs');
// var count = 0;
// function parallelFileOperation(){
//     var result = []
//     fs.readFile('a.txt', 'utf8', (err, data) => {
//         if (!err){
//             result.push(data);
//         }else{
//             throw "Error! While trying to read file."
//         }
//         count++;
//         if (count === 2){
//             console.log(result);
//         }
//     })
//     fs.writeFile('b.txt', 'Hello', (err) => {
//         if (err){
//             result.push(0);
//         }else{
//             result.push(1);
//         }
//         count++;
//         if (count === 2){
//             console.log(result);
//         }
//     })
//     // return result;
// }

// parallelFileOperation();

// 7 - 
// const fs = require('fs');
// var readContent = "";
// function sequentialCode(){
//     fs.readFile('a.txt', 'utf-8', (err, data) => {
//         if (!err){
//             readContent = data;
//         }
//     })
//     setTimeout(() => {
//         fs.writeFile('b.txt', readContent, (err) => {console.log("Error:" + err)})
//         new_str = readContent.replace(/\s+/g, ' ')
//         console.log(new_str)
//         // fs.writeFile('a.txt', '', (err) => {console.log("Done")})
//         fs.writeFile('b.txt', '', (err) => {console.log("Done")})
//     }, 3000);
    


// }
// sequentialCode();



let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

// Solution hidden. Unfold this block to see it.
module.exports = function(id) { // autofold
    let dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

    return new Promise(function(resolve, reject) {
        Promise.all([
            /*1*/central(id).catch(function() {return Promise.reject('Error central');})
            .then(function(db) {
                return dbs[db](id).catch(function() {return Promise.reject('Error ' + db);});}),
            /*2*/vault(id).catch(function() {return Promise.reject('Error vault');})])
            .then(function(data) {
            mark(id).catch(function() {});
            
        resolve({
            id: id,
            username: data[0].username,
            country: data[0].country,
            firstname: data[1].firstname,
            lastname: data[1].lastname,
            email: data[1].email
        });
        })

        .catch(function(error) {
            reject(error);
        });
    });
};