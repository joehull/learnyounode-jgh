var args = process.argv.slice(2,process.argv.length);
var sum = args.reduce(function(a, b) { return Number(a) + Number(b); }, 0);

console.log(sum);