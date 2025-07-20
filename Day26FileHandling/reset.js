const fs = require('fs');

const filePath = 'example.txt';
const content = 'Hello, this is some content.';

if(fs.existsSync(filePath)){
    fs.writeFile('example.txt',content,'utf8',(err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log('File has been reseted.');
    });
} else {
    console.log('File does not exists.');
}