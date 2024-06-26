 //Function that take two numbers//
 
 function twoNumbers(num1,num2){
return num1 + num2
 };

   
 let result = twoNumbers(20,3);
 console.log(result);

 //RETURN FIXED NUMBER//
 function returnfixedNumber(){
  return 30;
 }
  
 //UPPERCASE OR LOWECASE//
 function upperOrlowe(str,bool = false){
  if(bool){
    return str.toUpperCase();
  }else{
    return str.toLowerCase();  
  }
 }