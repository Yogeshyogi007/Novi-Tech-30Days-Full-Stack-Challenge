const fs = require('fs');

const filePath = 'example.txt';

if(fs.existsSync(filePath)){
    fs.unlink(filePath, (err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log('File has been deleted.');
    });
} else {
    console.log('File does not exists.')
}