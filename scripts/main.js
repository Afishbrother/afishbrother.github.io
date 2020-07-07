var name = prompt("what is your first name?");
var lastname = prompt("what is your last name?");

function welcome (name,lastname){
    return "Welcome "+ name+' '+lastname+'!';
}
var a =welcome(name,lastname);
alert(a);