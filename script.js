const button=document.querySelector(".theme-btn");
button.addEventListener('click',()=>{
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        button.textContent="☀️";
    }else{
        button.textContent="🌙";
    }
})