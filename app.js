function startingGrid(){
    let container = document.querySelector("#container");

    for(let i = 0; i < 16; i++){
        let divBig = document.createElement("div");
        divBig.className = "big";
        container.appendChild(divBig);

        let j = 0;
        do{
            let divSmall = document.createElement("div");
            divSmall.className = "small";
            divBig.appendChild(divSmall);
            j++
        }
        while(j < 16);
    }

    coloringGrid();
}

startingGrid();

function coloringGrid(){
    let gridItems = document.querySelectorAll('.small');
    gridItems = [...gridItems];

    gridItems.forEach((item) => {
        let gridItem = item;
        gridItem.count = 1;
        gridItem.addEventListener('mouseenter',
            (e) => {
                e.target.style.backgroundColor = '#6A6A6A';
                e.target.count += 1;
                e.target.style.opacity = 0.2 * e.target.count;
            }
        )
    });
}