// === Built in module === 
// writeFile, appendFile, readFile, delete(unlink), exist(have to use true/false condition) 
const fs = require("fs");

fs.appendFile('demo.txt', "Toooo muchhh!!!!!!!!!!", (err) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log("successful"); 
    }
});


// ============= rename file ================ 

// fs.rename('demo.txt', 'demo2.txt', (err) =>{ 
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("successful"); 
//     }
// });

// ============== read file ===============  
// fs.readFile('demo.txt', 'utf-8', (err, data) =>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

