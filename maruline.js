//maruline start-----------------------------------------
var maruline_resizemoveflg = false;
window.addEventListener("load",function(){
    maruline_resizemoveflg = true;
    marulineopen();


    var maruline = document.getElementsByClassName("maruline");
    for(var i = 0;i < maruline.length;i++){
        maruline[i].style.visibility = "visible";
        var box = maruline[i].getElementsByClassName("box");
        for(var x = 0;x < box.length;x++){
            var target = box[x].getElementsByClassName("area")[0];
            target.addEventListener("mouseenter",m_enter,false);
            target.addEventListener("mouseleave",m_leave,false);

        }
    }
    function m_enter(event){
        event.target.getElementsByClassName("maru")[0].classList.add("on");
        event.target.getElementsByClassName("str")[0].classList.add("on");
    }
    function m_leave(event){
        event.target.getElementsByClassName("maru")[0].classList.remove("on");
        event.target.getElementsByClassName("str")[0].classList.remove("on");

    }

});

window.addEventListener("resize",function(){
    if(!maruline_resizemoveflg){
        maruline_resizemoveflg = true;
        marulineopen();
    }
});

function marulineopen(){
    var maruline = document.getElementsByClassName("maruline");
    for(var i = 0;i < maruline.length;i++){
        var box = maruline[i].getElementsByClassName("box");
        for(var x = 0;x < box.length;x++){

            box[x].style.height = box[x].clientWidth + "px";
        }
    }
    maruline_resizemoveflg = false;
}
