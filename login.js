// var errorEl=document.getElementById('error')
// var form = document.getElementById('form')
// var textname=document.getElementById('textname')
// var pass=document.getElementById('pass')

// form.addEventListener('submit',function(event){
//    let error=[];
//    if(textname.value === '' || textname== null){
//     error.push('الاسم مطلوب')
//    }
//    if(error.length > 0){
//     event.preventDefault();
//      errorEl.innerHTML=error.join('<br> ')
//    }
// })
// document.getElementById("login").innerHTML="This is login button";
// document.querySelector("#login").addEventListener("click",change);

// function change(){
//    document.getElementById("login").innerHTML="This is login button";
//    document.getElementById("login").style.backgroundColor="blue";
// }
var popup=document.querySelector("#popup");
document.querySelector("#login").addEventListener("click",show);
function show(){
   popup.style .display="block"
}
document.querySelector(".btn-close") .addEventListener("click",function(){
   popup.style .display="none"
})
function print(){
   var x=document.getElementById('testname').Value;
   alert(x);
}
