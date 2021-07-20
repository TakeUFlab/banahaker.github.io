var textin = document.getElementById("textin");
var clickgoS = document.getElementById("gogoS");
var list = document.getElementById("list");
var clickgoB = document.getElementById("gogoB")

clickgoS.addEventListener("click",function(){
    list.innerHTML = "";
    list.innerHTML = list.innerHTML + `
    <div>
        <p id="textout">${textin.value.toLowerCase()}</p>
    </div>
    `
})
clickgoB.addEventListener("click",function(){
    list.innerHTML = "";
    list.innerHTML = list.innerHTML + `
    <div>
        <p id="textout">${textin.value.toUpperCase()}</p>
    </div>
    `
})