let input = document.getElementById("content")
let clearBtn = document.getElementsByClassName("nav_input_clearBtn")
let nav_search = document.getElementById('nav_search')
let nav_search_pannel = document.getElementsByClassName('nav_search_pannel')
input.onclick = function(){
    input.classList.add("inputAction")
    nav_search_pannel[0].style.display = "block"
    nav_search.style.borderRadius = '8px 8px 0 0';
}
input.onblur = function(){
    input.classList.remove("inputAction")
    nav_search_pannel[0].style.display = "none"
    nav_search.style.borderRadius = '8px';
}
input.oninput = function(){
    if(input.value){
        clearBtn[0].style.display = "flex"
    }else{
        clearBtn[0].style.display = "none"
    }
}
clearBtn[0].onclick =function(){
    clearInput();
}
function clearInput(){
    input.value = null;
    clearBtn[0].style.display = "none"
}