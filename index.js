var os = require('os');
var colors = require('colors');
var OSinfo = require('./modules/OSinfo');
var printTime = require('./modules/time');

process.stdin.setEncoding('utf-8');

console.log('Available commands: sayHello, /getOSinfo, /exit');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();

        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting App! \n');
                process.exit();
                break;
            case 'sayHello':
                process.stdout.write('Hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction \n');
        }
    }
});