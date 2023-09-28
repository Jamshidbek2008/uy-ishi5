const btn=document.querySelector('.btn')
const btn1=document.querySelector('.btn1')
const name1=document.querySelector('.input-name')
const login=document.querySelector('.alohida')
const phone=document.querySelector('.input-phone')
const regist=document.querySelector('.regist')
const random=parseInt((Math.random)*100)
const pasword=document.querySelector('.pasword')
 


login.addEventListener("click",()=>{
    phone.style.display="none"
    name1.style.display="none"
    login.style.borderBottom="3px solid green"
    regist.style.borderBottom="none"
})
regist.addEventListener("click",()=>{
    phone.style.display="block"
    name1.style.display="block"
    regist.style.borderBottom="3px solid green"
    login.style.borderBottom="none"
})
btn.addEventListener("click",()=>{
    confirm("siznig tasdiqlash kodingiz "+random)
})
btn1.addEventListener("click",()=>{
    if(random==pasword){
        confirm("ghuji")
    }
})