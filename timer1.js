//get args
let args = process.argv.slice(2)
//sort args
args = args.sort(function(a,b) {
  return a-b;
});
//beep beep
for (let i = 0; i < args.length; i++) {
  if (args[i] > 0 || args[i] === Number) {
    let timer = args[i] * 1000
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
}