const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

 ourReadStream.on('data', (chunk) => {
     console.log(chunk);
 });

 
 // Sajjat Ahmed
 // Founder and CEO, ZERO Inc.
 // Entrepreneur | Softwear Engineer | Auther