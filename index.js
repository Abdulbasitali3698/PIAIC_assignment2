"use strict";
//Create a function that takes an array, an index, and a value as parameters. 
//Inside the function,use the splice method to insert the value at the specified index in the array. 
//Return the modified array.
/*function value()
{
    let values:string[]=['ali','ahmad','basit','afzal'];
    var insert=values.splice(1,0,'deen');
    console.log(values);
}
value();*/
//Implement a simple shopping cart program using an array. 
//Create functions to add items, remove items, and update quantities using the splice method.
//Print the cart's contents after each operation
//let cart:string[]=["shoes","perfume","t-shirt","watch","ring","mobile"];
/*let cart:string[]=["a","b","c","d","e","f"];
console.log(cart);
function add()
{
var aditem=cart.splice(7,0,'G');
console.log("value after adding item",cart);
}
add();
function remove()
{
    var remvitem=cart.splice(0,1,);
    console.log("value after removing item",cart);
}
remove();
function update()
{
    var updatitem=cart.splice(3,1,'nike');
    console.log("value after updating item",cart);
}
update();*/
//Write a program that uses a while loop to print the first 25 integers.
/*var num:number=1;
while(num<=25)
{
    console.log("integar is:",num);
    num++;
}
*/
//Write a program that uses a while loop to print the first 10 even numbers.
/*var num:number=1;
while(num<=20)
{
    if(num%2==0)
    {
        console.log(num,"is even integar");
    }
    num++;

}
*/
//Create a function that takes a positive integer as parameter and
// uses a while loop to calculate and return the factorial of that number.
/*function factorial()
{
    var num:number=1;
    var factorial:number=5;
    while(num<=5)
    {
        factorial=factorial*num;
        num++;
        
    }
    console.log(factorial);
}
factorial();
*/
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, 
//use the splice method to insert the value at the specified index in the array. Return the modified array.
/*function arr() {
    var studentName:string[]=["naved","ali","ahmad","asif"];
    console.log(studentName.length);
    console.log(studentName);
    var insert=studentName.splice(4,0,"basit");
    console.log(studentName);
}
arr();
*/
//Implement a simple shopping cart program using an array. 
//Create functions to add items, remove items, and update quantities using the splice method. 
//Print the cart's contents after each operation
/*var shoppingCart:string[]=["bag","shoes","ring","bottle"];
console.log(shoppingCart);
function addItem()
{
    var add=shoppingCart.splice(1,0,"perfume");
    console.log(shoppingCart);
}
addItem();
function remvItem(){
    var remv=shoppingCart.splice( 0,1,);
    console.log(shoppingCart);
}remvItem();
function updatItem(){
    var updat=shoppingCart.splice(0,1,"gold");
    console.log(shoppingCart);
}
updatItem();
*/
//Create a function that takes a positive integer as parameter and
// uses a while loop to calculate and return the factorial of that number.
/*function fact(num:number) {
    var fact:number=1;
    var i:number=1;
    while(i<=5)
    {
        fact=fact*i;
        i++;
    }
    console.log(fact);
    }
    fact(5);
    */
//Write a program having an array of numbers 
//if the number is negative it should remove the negative number from the array.
/*function remvArry(arr:number[])
 {
     var i:number=1;
     while(i<arr.length){
         if(arr[i]<0){
             arr.splice(i,1,)
             i--;

         }
         i++;
     }
     console.log(arr);
}
remvArry([1,2,-9,5,6,-7,4,-8]);
*/
// Create a function that takes an array of numbers as parameter. 
//Use a while loop to calculate and return the sum of all the numbers in the array.
/*let sum:number=0;
function calculatArray(array:number[])
{
      
      let i:number=0;
      while(i<array.length){
          sum=sum+array[i];
          i++;
      }
      console.log(sum);
      return sum;
      
  
}

calculatArray([2,3,4]);
*/
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. 
//Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and
// store the converted temperatures in an array. 
//Use a while loop to perform the conversion for each temperature.
var tempCalsius = [10, 20, 30];
var tempFarenheit = [];
var i = 0;
while (i < tempCalsius.length) {
    tempFarenheit[i] = (tempCalsius[i] * 9 / 5) + 32;
    i++;
}
console.log(tempFarenheit);
