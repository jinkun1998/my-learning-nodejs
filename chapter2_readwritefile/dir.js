const fs = require('fs')

// create new dir
const dir = './new'
if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
        if (err)
            throw err
        console.log('directory created')
    })
}

// delete exist dir
if (fs.existsSync(dir)) {
    fs.rmdir(dir, (err) => {
        if (err)
            throw err
        console.log('directory deleted')
    })
}