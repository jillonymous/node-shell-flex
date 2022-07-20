const fs = require('fs');

module.exports = function cat (file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.trim().toString());
      process.stdout.write('\nprompt > ');
    }
  });
};