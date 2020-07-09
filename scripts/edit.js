var checklist = document.getElementById("checklist"); //one result
var items= checklist.querySelectorAll("li");  //three results
var inputs= checklist.querySelectorAll("input"); //three results
console.log(items)
function editItem(){
    this.className="edit"; //this is li
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0,input.value.length);
    //console.log(input.value,input.value.length);
}

function updateItem(){
    //console.log("blur!!", this.value)
    this.previousElementSibling.innerHTML= this.value;//上个元素
    this.parentNode.className="";//父节点
}

function itemKeypress(){
   // console.log(event.which);
   if (event.which == 13){
       updateItem.call(this); //难点：传递this
   }
}


for (var i=0; i<items.length; i++){
    items[i].addEventListener("click",editItem);
    inputs[i].addEventListener("blur",updateItem); //blur inputs
    inputs[i].addEventListener("keypress",itemKeypress);
}
