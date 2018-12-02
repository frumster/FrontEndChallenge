$(document).foundation();

function toggle(obj,cls){
    if(obj.classList.contains(cls)){
        obj.classList.remove(cls)
    }
    else {
        obj.classList.add(cls)
    }
}

function onClick(btn){
    toggle(btn,"active");
    let formCard = document.getElementsByClassName('form-card')[0];
    toggle(formCard,"is-hidden");
    let infoCard = document.getElementsByClassName('body-card')[0];
    toggle(infoCard,"is-hidden");
}


$(".clear").on("click",function(){
    $("form div").removeClass("error");
    $("form label").removeClass("error");
    $("form")[0].reset();
});