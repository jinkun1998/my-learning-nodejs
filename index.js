const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (error, data) => {
    if (error)
        throw error;
    console.log(data);
});

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (error) => {
    if (error)
        throw error
    console.log('write complete')
})

process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});