module.exports = function pwd() {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}
