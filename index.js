var dispdiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgsrc = null,
    stinp = document.getElementById("stickerurl"),
    stC = document.getElementById("cursor"),
    stheight = document.getElementById("stickerheight"),
    the_height = 150;

document.getElementById("bgcolor").addEventListener("change",function(){
    dispdiv.style.backgroundColor = this.value
});

st1.addEventListener("click",function(){
    imgsrc = "1.png";
    stC.src = imgsrc;
});

st2.addEventListener("click",function(){
    imgsrc = "2.png";
    stC.src = imgsrc;
});

dispdiv.addEventListener("click",function(ev){
    
    var newimg = document.createElement("img");
    newimg.src = imgsrc;
    newimg.className = "displaystickers";
    dispdiv.appendChild(newimg);
    
    console.log(ev.pageX, ev.pageY);
    newimg.style.left = ev.pageX+"px";
    newimg.style.top = ev.pageY+"px";
    newimg.style.height = the_height+"px";

    
});

stinp.addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        var newsticker = document.createElement("img");
        newsticker.src = stinp.value;
        newsticker.className = "stickers";
        document.getElementById("stickers").appendChild(newsticker);
        stinp.value = "";
        newsticker.addEventListener("click",function(){
            changeimage(this);
        })
    }
});

stheight.addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        the_height = stheight.value;

    }
})

dispdiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY+"px";
    stC.style.left = ev.pageX+"px";
});

function changeimage(el){
    imgsrc = el.src;
    stC.src = imgsrc;
};