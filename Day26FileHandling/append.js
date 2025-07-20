const fs = require('fs');

const additionalContent = '\nThis content is appended.';
const filePath = 'example.txt';
if (fs.existsSync(filePath)){
    fs.appendFile(filePath, additionalContent, 'utf8',(err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Content has been appended to the file.');
    });
}else{
    console.log('File does not exists')
}