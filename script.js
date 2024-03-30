const numberOfboxes = 16;
const container = document.querySelector(".container");
const submitBtn = document.querySelector("button");
const input = document.querySelector("input");
function removeAllChildren(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}
function handleClick(){
    let size = input.value;
    removeAllChildren(container);
    makeTheGridLayour(size);
}
function generateRandomRGB() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return [red, green, blue];
}
submitBtn.addEventListener("click",handleClick);
function handlHoverOverDiv(event){
    var colorArray = generateRandomRGB();
    var colorString = 'rgb(' + colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ')';
    event.target.style.backgroundColor = colorString;
    let opacity = parseFloat(event.target.style.opacity);
    opacity= opacity+0.1;

    event.target.style.opacity = opacity;

}
function makeTheGridLayour(numberOfboxes){
    for(let i = 0;i<numberOfboxes;i++){
        let divRow = document.createElement("div");
        divRow.style.display="flex";
        divRow.style.flex = 1;
        for(let j=0;j<numberOfboxes;j++){
            let div = document.createElement("div");
            divRow.appendChild(div);
            div.style.border="1px solid black";
            div.style.flex = 1;
            div.style.opacity = 0;
            div.addEventListener("mouseover",handlHoverOverDiv);
            
        }
        container.appendChild(divRow);
    }
}

makeTheGridLayour(numberOfboxes);