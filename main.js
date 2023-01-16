let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
var sub1=parseInt (document.getElementById("tamil").value);
var sub2=parseInt (document.getElementById("english").value);
var sub3=parseInt (document.getElementById("maths").value);
var sub4=parseInt (document.getElementById("science").value);
var sub5=parseInt (document.getElementById("social").value);

let x=sub1+sub2+sub3+sub4+sub5;
let a=x/ 5;

console.log(a);

if(a>90){
  document.getElementById("crate").innerText="  A+ ";
}
else if(a<90 && a>=80){
  document.getElementById("crate").innerText="A ";
}
else if(a<80 && a>=70){
  document.getElementById("crate").innerText=" B";
}
else if(a<70 && a>=60){
  document.getElementById("crate").innerText="C ";
}
else if(a<60 && a>=40){
  document.getElementById("crate").innerText="D ";
}
else{
  document.getElementById("crate").innerText=" F";

}

}