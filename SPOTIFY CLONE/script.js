console.log("hello")
var slider = document.getElementById("dur-bar");
slider.addEventListener("mousemove",function(){
    var x=slider.value;
    var color= `linear-gradient(90deg, rgb(0,255,0) ${x}%, #313131 ${x}%)`;
    slider.style.background=color;
})
var slid = document.getElementById("vol");
slid.addEventListener("mousemove",function(){
    var y=slid.value;
    var col= `linear-gradient(90deg, rgb(0,255,0) ${y}%, #313131 ${y}%)`;
    slid.style.background=col;
})
