const fs = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })
// console.log("The programme has been successfully completed...");



// sync file reading technique : 
// const a=fs.readFileSync('file.txt')
// console.log(a.toString());
// console.log("The programme has been successfully completed...");

// Async file reading technique : 
/*


const a=fs.readFile('file.txt',(err,data)=>{
    if (err) {
        console.log("This is an error :....");
    }
    else{
        console.log("This is from inside else ",data.toString());
    }
})
console.log("The programme has been successfully completed...");


*/

// Fs.write technique : 
/*
fs.writeFile('file2.txt',"This is file2.txt",(err,data)=>{
    if (err) {
        console.log("There is an error in writing the file ...");
    }
    else{
        console.log("Writing in the file is successfully...");
    }
})
console.log("\n Now i am printing the outside.");

*/

// Writing into the file in Sync way : 
/*

const ans=fs.writeFileSync('file2.txt',"This is file2.txt")
console.log("Writing successfully");
console.log("Now i am printing the outside.");

*/