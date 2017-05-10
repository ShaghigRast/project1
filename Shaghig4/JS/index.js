alert('welcome Summer');

/*var Hotels=[
    "Hilton",
    "Sheraton",
    "Mariott"
    ];

 Hotels[2];   
    
 var colors = ["white",
 "black",
 "red"] ;

 colors[2] = "blue";
 console.log(colors); 

console.log(colors.length);

var newLength = colors.push("yellow");
console.log(newLength);
console.log(colors);


var last = colors.pop();
console.log(colors);

var first = colors.shift();
console.log(colors);

var newLength2 = colors.unshift ("orange");
console.log (colors);

var position = colors.indexOf ("orange");
console.log(position); 

var fruits=["apple","strawberry","carrot"];
var animals=["dog","cat","lion"];
var array=[1,6,-3,"spam",true,false];


var listOfLists=[fruits, animals , array];
console.log (listOfLists);


var fruits= ["banana","Melon","orange"];
var last= fruits [fruits.length - 1];
console.log (last);


var fruits=["apple","orange","mango","melon"];
var fLen = fruits.length;
for (i= 0 ; i< fLen; i++) {
    console.log (fruits[i]);

}


var names=["shaghig","lisa","Tommy","Nick","ben","mike"];
var nLen= names.length;

for (i= 3 ; i< nLen ; i++){


console.log (names[i]);
}


/*for (var i=1 ; i< 6 ; i++){
console.log("*".repeat[i])
}

/*var todayTime = new date (todayTime);
console.log (todayTime);
*/

/*var Array=[[[1],[2],[3]],[[1],[2],[3]],[[1],[2],[3]]];
console.log(Array[1][1]);



var user={name:"Shaghig",
profession:"programmer",
salary:500,}

user.eyecolor = "black";
user.isAdmin=false;

console.log (user);

delete user.eyecolor;

console.log (user);

console.log (user.name);


var car = new Object();

car.color="black";
car.brand="Mercedes";
car.price=10000;
car.model="2015";

console.log (car);


var book= {subject:"JS Rocks!",
author:"no Idea",
}

console.log("Book's name is:" + " " + book.subject);
console.log ("Book's author is:"+ " " + book.author);


book.price= 100;

book.subject = "Programming";
console.log("Book's name is:" + " " + book.subject);

var testObj= {
    "for starters":"salad",
    "my drink":"slurpy",
    "devine desert" : "nutella",
};
testObj["check please"] = "whatever";

console.log (testObj["my drink"]);

var firstOrder = testObj["for starters"];
var secOrder = testObj["my drink"]; 
----------------------------------------------


function myFunction (a , b){
    return a*b;
}

myFunction(4, 3)
var x = myFunction (4, 3);

function calculateDogAge(age){
    var dogYears= 7*age;
    console.log("your dog is" + " " + dogYears + " Years old in dog years!")
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

function calculateSupply (age , workHours) {
    var Age = 80;
    var workHoursNeeded = (workHours * 365) * (Age - age);
    var message = "you will work " + workHoursNeeded + "  per year to have a good salary";
    console.log (message);
}
calculateSupply (25 , 8);
calculateSupply (25, 6);
calculateSupply(25, 4);



function myFunc (checkString) {
   if (typeof (checkString) == 'string')return true;
};

console.log (myFunc('hi'));

var w = 15;
var volume = function (w,l,h) {
    return w * l * h;
}
volume (2, 3, 4);
console.log (w);


var area = 36;
var volume = function (w, l, h) {
var area = w * l;
    console.log ("inside the function area is " + area);
    return area * h;
};
console.log("The volume is " + volume (2, 3, 4));
console.log("Outside the function, area is " + area);

function maxNumb (n1, n2) {
    if (n1 < n2){
        return n2
    }
    else {
        return n1;
    }
}
alert (maxNumb(10,12));

var num1= 5;
var num2= 6;
var getMaxNum = function (n1, n2) {
    if (n1 < n2){
        return n2;
    }
    else {
        return n1;
    }
};
console.log(getMaxNum(num1, num2));

function doubleMax (x, y) {
    return 2 * getMaxnum (x,y);
};
function getMaxnum(n1, n2) {
    if (n1 < n2) {
        return n2; }
        else {
            return n1;
        }
    };

    console.log(doubleMax(13, 10));*/

    function luckyNumber (a, b, c){
        var lucky = b * getMin(a, c);
        return lucky;
    }
function getMin(n1, n2){
    if (n1 > n2){
        return n2;
    }
    else{
        return n1;
    }
}

alert("your lucky number is: "+ luckyNumber(4,9,20));





