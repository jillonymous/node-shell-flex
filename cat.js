const fs = require('fs');

const cat = (filePath, done) => {
  fs.readFile(filePath, (err, file) => {
    if (err) console.log(err);
    else {
      done(file.toString());
    }
  });
};

module.exports = cat;
