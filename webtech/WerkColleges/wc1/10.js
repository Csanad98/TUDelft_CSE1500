//Implement a function that receives a function f and another two 
//parameters, and returns true if calling f with those two parameters 
//returns a positive number.



function foo(f, x, y) {

    if (f(x,y) >= 0) {
        return true;
    }

    return false;
}


function foo2(f, x, y) { //?

    return f(x,y) >= 0;
}
