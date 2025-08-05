let btn=document.querySelector("#btn");
let h3=document.querySelector("h3");
let div=document.querySelector(".div");
let resetbtn=document.querySelector("#resetbtn");

btn.addEventListener("click",colorGenerator);





function colorGenerator(){
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);

  h3.innerText=`rgb(${red},${green},${blue})`;
  div.style.backgroundColor=`rgb(${red},${green},${blue})`;


}

resetbtn.addEventListener("click",()=>{
  h3.innerText="Generate a random color";
  div.style.backgroundColor="white";

})