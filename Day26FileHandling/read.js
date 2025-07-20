const fs = require('fs');

const filePath = 'example.txt';

if(fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err){
            console.error(err);
            return;
        }
        console.log(data);
    });
}else{
    console.log('File did not exists')
}