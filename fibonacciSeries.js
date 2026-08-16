function fibonacciSeries(n){
    for (var i=0; i<n; i++){
        if (i === 0) {
            console.log(0);
        }
        else if (i === 1) {
            console.log(1);
        }       
        else {
            var a = 0, b = 1, c;    
            for (var j=2; j<=i; j++){
                c = a + b;  
                a = b;
                b = c;
            }
            console.log(c);
        }
    }
}

fibonacciSeries(13);