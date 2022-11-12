const fs = require('fs');

async function writeToFile(filename, string){
    try {
        fs.writeFileSync(filename, string);
        console.log('Data Saved to ' + filename);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { writeToFile };