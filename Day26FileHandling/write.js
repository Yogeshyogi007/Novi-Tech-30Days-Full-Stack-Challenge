const fs = require('fs');

const content = 'Hello, this is some content!';
const filePath = 'example.txt';
if (fs.existsSync(filePath)) {
    console.log('File exists.');
}else{
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err){
            console.error(err);
            return;
        }
        console.log('File has been written.');
    });
}