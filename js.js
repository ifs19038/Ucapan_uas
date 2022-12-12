var b = document.querySelector("button.button_no");
b.addEventListener("click",change);
function change()
{
    var i = Math.floor(Math.random()*200)+1;
    var j = Math.floor(Math.random()*200)+1;
    b.style.right = i+"px";
    b.style.top = j+"px";
}