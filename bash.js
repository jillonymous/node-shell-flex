const pwd = require('./pwd');
const date = require('./date');
const ls = require('./ls');
const cat = require('./cat');

const done = (data) => {
  process.stdout.write(data);
  process.stdout.write('\nprompt > ');
};
//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  let filePath;
  const cmd = data.toString().trim(); //remove the newline
  const args = cmd.split(' ');
  if (args.length > 1) filePath = args[1];
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'date') {
    date(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (args[0] === 'cat') {
    cat(filePath, done);
  }
});
