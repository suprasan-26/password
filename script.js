let btn=document.querySelector("button").addEventListener("click",()=>{
let display_password=document.querySelector("input")

let len=document.querySelectorAll("input")[1].value;

let up=document.querySelectorAll("input")[2];
let low=document.querySelectorAll("input")[3].checked;
let special=document.querySelectorAll("input")[4].checked;
let num=document.querySelectorAll("input")[5].checked;
let password=""
let uppercase_char="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase_char="abcdefghijklmnopqrstuvwxyz";
let special_char="!@#$%^&*?"
let number="1234567890"


for(let i=0; i<len;i++){
    if(up.checked){
        let x=Math.floor(Math.random()* uppercase_char.length)
        password+=uppercase_char[x];
    }
    if(low){
        let y=Math.floor(Math.random()* lowercase_char.length)
        password+=lowercase_char[y];
    }
    if(special){
        let z=Math.floor(Math.random()* special_char.length)
        password+=special_char[z];
    }
    if(num){
        let xz=Math.floor(Math.random()* special_char.length)
        password+=number[xz];
    }

}

let neww = password.substring(0,len);
display_password.value=neww;
})

