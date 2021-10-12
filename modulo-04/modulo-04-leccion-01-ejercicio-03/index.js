const fs = require('fs');

//leer

fileContent = fs.readFile('input-file.json', 'utf8', (err, fileContent) => {
  if (err) {
    console.log('Este es el error:', err);
  } else {
    console.log(JSON.parse(fileContent));
  }
});
//console.log(fileContent);
//console.log(JSON.stringify(fileContent));
// const handleWrite = (err) => {
//   if (err) {
//     console.log('este es el error', err);
//   } else {
//     console.log('todo correcto');
//   }
// };

// fs.writeFile('./output.json', JSON.stringify(fileContent), handleWrite);
