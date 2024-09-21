New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
const fs = require('fs')

// fs.appendFile('test.txt', "\nNode File System", ()=>{
//     console.log("File writing is completed")
// })

fs.readFile('test.txt', 'utf-8', (err, data)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log("File writing is Initiated")