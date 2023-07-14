// 1-counter.md
// var counter = 0;

// setInterval(() => {
//     console.clear();
//     counter += 1;
//     console.log(counter);
// }, 1000);

// var counter = 0;

// function CounterAdvanced(){
//     console.clear();
//     counter += 1;
//     console.log(counter);
//     setTimeout(CounterAdvanced, 1000)
// }


// setTimeout(CounterAdvanced, 1000)

// 3-read-from-filesystem.md
const fs = require('fs');

// fs.readFile('./sometext.txt', "utf8",(err,data)=> {
//    if (!err){
//     console.log(data);
//    }else{
//     console.warn(err);
//    }
// })

// 4-write-to-file.md
fs.writeFile('vvg.txt',"Hello written using fr write", (err) => {
    if (err){
        console.log("Error:"+err);
    }else{
        console.log("Sucessfully Done!!!!");
    }
})