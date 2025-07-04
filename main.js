initialize();

function initialize(){
    setSize(16);
    incrementOpacity();
    promptGridSize();
    getEtchEffect();
}

function setSize(size){
    const container = document.getElementById("container");

    for(let y=0; y<size * size; y++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${500/size}px`;
        box.style.height = `${500/size}px`;
        container.appendChild(box);
    }

}

function incrementOpacity(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.opacity = +div.style.opacity + 0.1;
        });
    });
}

function removeGrid(){
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function promptGridSize(){
    const gridSize = document.getElementById("size");

    gridSize.addEventListener("click", () => {
        size = parseInt(prompt("Set Grid Size (must be between 1 and 100)"));
        if(size >= 1 && size <= 100){
            removeGrid();
            setSize(size);
            incrementOpacity();
        }
        else{
            alert("Grid size must be between 1 and 100!")
        }
    });
}

function getEtchEffect(){
    const effect = document.getElementById("effect");

    effect.addEventListener("click", () => {
        alert("Sorry, this feature is coming soon!");
    });
}