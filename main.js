let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
var sub1=parseInt (document.getElementById("tamil").value);
var sub2=parseInt (document.getElementById("english").value);
var sub3=parseInt (document.getElementById("maths").value);
var sub4=parseInt (document.getElementById("science").value);
var sub5=parseInt (document.getElementById("social").value);

var x=sub1+sub2+sub3+sub4+sub5;
var a=x/ 5;

console.log(a);

if(a>90){
 document.getElementById("total").value=a;
document.getElementById("grate").innerText="A+ " +a;

 
}
else if(a<90 && a>=80){
  document.getElementById("total").value=a;
  document.getElementById("grate").innerText="A ";
}
else if(a<80 && a>=70){
  document.getElementById("total").value=a;
  document.getElementById("grate").innerText=" B";
}
else if(a<70 && a>=60){
  document.getElementById("total").value=a;
  document.getElementById("grate").innerText="C ";
}
else if(a<60 && a>=40){
  document.getElementById("total").value=a;
  document.getElementById("grate").innerText="D ";
}
else{
  document.getElementById("total").value=a;
  document.getElementById("grate").innerText=" F";

}

}