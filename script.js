const numberOfboxes = 16;
const container = document.querySelector(".container");

for(let i = 0;i<numberOfboxes;i++){
    let divRow = document.createElement("div");
    divRow.style.display="flex";
    divRow.style.flex = 1;
    for(let j=0;j<numberOfboxes;j++){
        let div = document.createElement("div");
        divRow.appendChild(div);
        div.style.border="1px solid black";
        div.style.flex = 1;
        container.appendChild(divRow);
    }
}