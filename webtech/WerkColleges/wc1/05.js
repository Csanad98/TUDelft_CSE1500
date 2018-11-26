//Implement a function that receives an arbitrary number of numerical
// arguments and returns the average.
//(hint: arguments object and rest syntax)



function mean () {
    if (arguments.length == 0)
        return undefined;

    var avg = 0;

    for (var i = 0; i< arguments.length; i++) {
        avg = avg + arguments[i];

    }

    avg = avg / arguments.length;
    return avg;
}


function mean2 (...a) {
    if (a.length == 0)
        return undefined;

    var avg = 0;

    for (var i = 0; i< a.length; i++) {
        avg = avg + a[i];

    }

    avg = avg / a.length;
    return avg;
}