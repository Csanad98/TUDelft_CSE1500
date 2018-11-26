
//Implement a function that receives an array and returns another array
//with the same contents but without duplicates, maintaining the same order.
//(hint: indexOf and push)

function unique(a) {

    var b = [];

    for (var i = 0; i<a.length; i++) {
        if (b.indexOf(a[i]) < 0) {  //returns negative num if it's not in the array
            b.push(a[i]);
        }
    }

    return b;
  
}
