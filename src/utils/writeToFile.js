const fs = require('fs');

async function writeToFile(filename, string){
    try {
        fs.writeFileSync(filename, string);
        console.log('File Saved!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { writeToFile };