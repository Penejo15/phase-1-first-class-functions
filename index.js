function ama(spy, chai) {
    console.log(spy + chai);
  ama(bitcoin)
}
  
function receivesAFunction(callback) {
    callback(arguments[1], arguments[2]);
}
  
let spy = 'book';
let chai = 'cook';

function returnsANamedFunction() {
    return ama;
}


function returnsAnAnonymousFunction(a){
    return function(b){
      return a+b
    }
}
