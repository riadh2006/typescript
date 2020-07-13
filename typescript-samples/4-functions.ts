

// JavaScript 
let logging = function(message){
    console.log(message);
}

// Type Script : arrow function (Multi line)
let doLogging = (message) => {
    console.log(message);
}

// Type Script : arrow function (One line) 
let doLoggingOneLine = (message) => console.log(message);
// With only one paramaters 
let doLoggingOneLine2 = message => console.log(message);

logging('test');
doLogging('test2');
doLoggingOneLine('test3')
doLoggingOneLine2('test4')


