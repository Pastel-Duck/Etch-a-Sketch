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

function gridSize(){
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', (e) => {
        let grid = prompt("Enter a number from 16 to 64");
        let container = document.querySelector('#container');
        let bigDiv = document.getElementsByClassName('big');
        
        function removeAllChildNodes(){
            while(container.firstChild){
                container.removeChild(container.firstChild);
            }
            while(bigDiv.firstChild){
                bigDiv.removeChild(bigDiv.firstChild);
            }
        }
            if(grid < 16 || grid > 64 || isNaN(grid) == true){
                removeAllChildNodes();
                startingGrid();
            }
            else{
                removeAllChildNodes();
                for(let i = 0; i < grid; i++){
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
                    while(j < grid);
                }
                coloringGrid();
            }
        })
    }

    gridSize();