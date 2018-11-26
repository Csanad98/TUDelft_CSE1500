//Implement a sum function that can be called in two steps as follows: sum(x)(y).


function sum (x) {
    return function(y) {
        return x + y;
    }

}
