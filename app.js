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
}

startingGrid();