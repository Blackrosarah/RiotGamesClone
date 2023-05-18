// let header = document.querySelector("header");
// window.addEventListener("scroll",function(){
//     var val=this.scrollY;
//     console.log(val);
//     if(val>=97){
//         header.style.backgroundColor="white";
//     }
//     else{
//         header.style.backgroundColor="none";
//     }
// })

function changeBC(){
    let header = document.querySelector("header");
    var val=window.scrollY;
    if(val<97){
        header.classList.remove("bgColor");
    }else{
        header.classList.add("bgColor");
    }
}
window.addEventListener("scroll",changeBC);