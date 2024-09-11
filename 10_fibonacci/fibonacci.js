const fibonacci = function(n) {
    const fib = [0, 1];
    n = +n;
    if(n < 0) return 'OOPS'
    if(n == 0) return fib[0];
    if(n == 1) return fib[1];
    
    for(let i = 2; i <= n; i++){
        // formula for fibonacci sequence
        let fibI = fib[i-1] + fib[i-2];
        fib.push(fibI);
    }

    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
