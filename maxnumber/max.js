// Function to show the maximum number 
"use strict"

function showMaxNumber(n1, n2, n3, n4, n5) {
    var arr_Numbers = [n1, n2, n3, n4, n5];
    var lnOfArr_Numbers = arr_Numbers.length;
    var maxNumber = 0;
    var i; // counter for FOR loop 
    for (i = 0; i < lnOfArr_Numbers; i++) {
        var numberToCheck = arr_Numbers[i];
        if (numberToCheck > maxNumber) {
            maxNumber = numberToCheck;
        }
    }
    console.log(maxNumber);
}

showMaxNumber(3, 11, 15, 5, 1);