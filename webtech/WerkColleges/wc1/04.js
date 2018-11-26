//Implement a function that receives a string and returns an 
//array with all its substrings of length n. If n is not provided, assume n = 1.
//(hint: substring)



function allSubstr(s, n) {
    if (n === undefined) {
        n =1;
    }

    var b = [];

    for (var i = 0; i < s.length-n+1; i++) {
        b.push(s.substring(i, i+n));
    }

    return b;
  
}
