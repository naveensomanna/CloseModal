
const buttons=document.querySelectorAll(".card button");
const modalOuter=document.querySelector(".modal-outer");
const modalInner=document.querySelector(".modal-inner");

buttons.forEach((button)=>button.addEventListener("click",handleButtonClick))


function handleButtonClick(e){
    const card=e.currentTarget.closest(".card");
    const imageSrc=card.querySelector("img").src;
    const title=card.querySelector("h2").textContent;
    modalOuter.classList.add("open");
    modalInner.innerHTML=`<img src=${imageSrc}/> <p>${title}</p>`

}

modalOuter.addEventListener("click",function(e){
   const isOutside= !e.target.closest(".modal-inner");
   if(isOutside){
    closeModal();
   }
})

 function closeModal(){
    modalOuter.classList.remove("open");
}


window.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
    closeModal();
}
})