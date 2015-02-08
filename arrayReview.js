var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function(){
return threeItems[2];
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

// first attempt

var odd = function(){
 for(var i = evenArray.length; i >= 0; i--){
        if(evenArray[i] % 2 === 1){
            evenArray.splice(i,1);
        } 
 }
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var findRandom = function(){
    var rnum = getRandomArbitrary();
    alert('The random number is ' + rnum);
    for(var i = 0; i < randomArray.length; i++){
        if(rnum === randomArray[i]){
            var found = true;
        };
    };
      if(found === true){
      alert('true');
      }
    else{
        alert('false');
    }
}


  //code here


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
var copy = function(){
    second = first.slice(0);
    second.splice(5,0,6,7);
    return second;
}

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
var longest = function(){
    var arr = [];
    var longestword = [];
    arr = sentence.split(' ');
    for(var i = 0; i < arr.length; i++){
if(arr[i].length > longestword.length){
var longestword = arr[i];
}
}
    
return longestword;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 

//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
var myPoem = 'What is a jQuery but a misunderstood object?'

var capitalize = function(){
    var arr = [];
    var newarr = [];
    arr = myPoem.split(' ');
    for(var i=0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        alert(arr[i]);
    }
    
    return arr;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var theOdyssey = "function expression or function declaration? Tis an obvious choice";

var vowelCounter = function(string){
    var counter = 0;
    var vowels = ['a','e','i','o','u'];
        var arrvowel = theOdyssey.split('');
        for(var i = 0; i<arrvowel.length; i++){
            if(arrvowel[i] === 'a' || arrvowel[i] === 'e' || arrvowel[i] === 'i' || arrvowel[i] === 'o' || arrvowel[i] === 'u'){
             counter++;   
            }
        }
    return counter;
};