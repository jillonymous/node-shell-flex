const fs = require('fs');

const ls = (done) => {
  fs.readdir(process.cwd(), (err, files) => {
    if (err) console.log(err);
    else {
      done(files.join('\n'));
    }
  });
};

module.exports = ls;
