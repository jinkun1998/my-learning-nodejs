const fs = require('fs');

fs.readFile('./files/stater.txt', 'utf-8', (error, data) => {
    if (error)
        throw error;
    console.log(data);
})

process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
})