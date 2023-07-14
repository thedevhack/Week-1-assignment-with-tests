// 1-file-cleaner.md
// const fs = require('fs');

// function file_cleaner(file){ 
//     fs.readFile(file, 'utf8', (err,data) => {
//         if (err){
//             console.warn("Error: "+err);
//         }else{
//             var input_str_with_extra_spaces = data.split("")
//             var input_str_without_extra_spaces = []
//             var space_allowed = true;
//             input_str_with_extra_spaces.forEach((char) => {
//                 if (char === " "){
//                     if (space_allowed === true){
//                         space_allowed = false;
//                         input_str_without_extra_spaces.push(char)
//                     }
//                 }else{
//                     input_str_without_extra_spaces.push(char)
//                     space_allowed = true;
//                 }

//             })
//             new_str = input_str_without_extra_spaces.join("")
//             fs.writeFile(file, new_str, (err) => {
//                 if (err){
//                     console.warn("Sorry some error has been encountered" + err)
//                 }else{
//                     console.log("Sucessfully Written!!!")
//                 }
//             })
//         }
//     })
    
// }

// file_cleaner('./file.txt')

//2-clock.md

// time = new Date()
// hours = time.getHours()
// minutes = time.getMinutes()
// seconds = time.getSeconds()

// function updateTime(){
//     if (seconds == 59){
//         if (minutes == 59){
//             if (hours == 23){
//                 hours = 0
//                 minutes = 0
//                 seconds = 0
//             }else{
//                 hours += 1
//                 minutes = 0
//             }
//         }else{
//             minutes += 1
//             seconds = 0
//         }
//     }else{
//         seconds += 1
//     }
//     console.log(hours + ":" + minutes + ":" + seconds)
//     setTimeout(updateTime, 1000)
// }

// // console.log(" "+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
// setTimeout(updateTime, 1000)

// AM-PM 

time = new Date()
hours = time.getHours()
minutes = time.getMinutes()
seconds = time.getSeconds()

function updateTime(){
    if (seconds == 59){
        if (minutes == 59){
            if (hours == 23){
                hours = 0
                minutes = 0
                seconds = 0
            }else{
                hours += 1
                minutes = 0
            }
        }else{
            minutes += 1
            seconds = 0
        }
    }else{
        seconds += 1
    }
    if (hours>12){
        // hours=hours-12
        // timeCode = "PM"
        console.log(hours-12 + ":" + minutes + ":" + seconds + " PM")
    }else{
        console.log(hours + ":" + minutes + ":" + seconds + " AM")
        timeCode = "AM"
    }
    setTimeout(updateTime, 1000)
}

// console.log(" "+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
setTimeout(updateTime, 1000)