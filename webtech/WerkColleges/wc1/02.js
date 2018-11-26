//Implement a function that returns an array with the minimum and
//maximum numbers found in the input array.
//(hint: apply and spread syntax)

function range(a) {

    if (a.length == 0)
        return undefined;
  
    var max = Math.max.apply(null, a);

    var min = Math.min.apply(null, a);


    return [min, max];
}



function range2(a) {

    if (a.length == 0)
        return undefined;
  
    var max = Math.max(...a);

    var min = Math.min(...a);


    return [min, max];
}