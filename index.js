const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toArray());
});

 ourReadStream.on('data', (chunk) => {
     ourWriteStream.write(chunk);
 });