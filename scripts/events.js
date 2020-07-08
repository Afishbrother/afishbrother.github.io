var hanbing = document.getElementById("hanbing");
var liulang = document.getElementById("liulang");
var jiansheng = document.getElementById("jiansheng");
var hideall = document.getElementById("hideall");
// var hp = document.getElementById("hanbing-pic"); 
// var lp = document.getElementById("liulang-pic"); 
// var jp = document.getElementById("jiansheng-pic"); 

function showpic(){
    var allimg = document.querySelectorAll("img");
    for (var i = 0; i< allimg.length; i++){
        allimg[i].className="hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);

    if (pic.className == "hide"){
        pic.className="";
    }
    else{
        pic.className = "hide"
    }
}

function hide(){
    var allimg = document.querySelectorAll("img");
    for (var i = 0; i< allimg.length; i++){
        allimg[i].className="hide";
    }

}

hanbing.addEventListener("click",showpic);
liulang.addEventListener("click", showpic);
jiansheng.addEventListener("click", showpic);
hideall.addEventListener("click",hide);

