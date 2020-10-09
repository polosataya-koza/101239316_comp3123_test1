const fs = require("fs")

fs.mkdir("./Log", { recursive: true }, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully Log created.")
    }
})

//change directory
try {
    fs.chdir('/Log');
}
catch (err) {
    console.log('chdir: ' + err);
}

//create files
//fs.touch("log0.txt")


// delete directory
fs.rmdir("./Log", { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`Directory Log is deleted!`);
});