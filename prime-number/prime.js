function checkPrime(num){
  
  // check if a number is divided by 2,3,5,7 and the division is a whole number greater than 1
    
  "use strict"; // Local variable only
  
  var checkingNumber = [2,3,5,7];
  var i=0;
  var cnLength = checkingNumber.length;

    for (i; i < cnLength; i++ ){
if ( num === checkingNumber[i]) {
    console.log("Prime");
}
    

  }
  
  for (i; i < cnLength; i++ ){
    
    var answer = num/checkingNumber[i];    
    console.log (answer);

    if (answer%1 === 0) { console.log("Not Prime"); break;}
    else { console.log("Prime")}
    
  }
  
  
}
checkPrime(49)  
