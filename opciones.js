'use strict'
function ShowHide(){
    let opcion=document.getElementsByClassName("info")[0];
    if(opcion.style.visibility=="hidden"){
        opcion.style.visibility="visible";
    }else{
        opcion.style.visibility="hidden";
    }
}


