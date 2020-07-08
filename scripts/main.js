// first javascripts
// var name = prompt("what is your first name?");
// var lastname = prompt("what is your last name?");

// function welcome (name,lastname){
//     return "Welcome "+ name+' '+lastname+'!';
// }
// var a =welcome(name,lastname);
// alert(a);
/*
var mylist=['apple','orange','bananas'];
mylist.forEach(function(value,index){
    alert('I have '+index+' '+value+' in my bag!');
});

for (var i=0; i< mylist.length; i++){
    j=i+1;
    alert('I have '+j+' '+mylist[i]+' in my bag!');
}*/

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

//addSum.innerHTML= "your sum is: ";

function add(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML= "your sum is: "+(one+two);
}

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);