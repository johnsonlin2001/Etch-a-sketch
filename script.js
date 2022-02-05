const mainframe = document.querySelector('#container');
for(let i=0;i<256;i++){
    let grid = document.createElement('div');
    grid.classList.add('block');
    mainframe.appendChild(grid);
}



let blocks = document.querySelectorAll('.block');
for(const item of blocks){
   item.addEventListener("mouseover",()=>{item.classList.add("black")});
}


function clearboard(){
    for(const item of blocks){
        item.classList.remove("black");
    }

    let children = mainframe.childNodes;
    for(const child of children){
        childofchild = child.childNodes;
        for(const grandson of childofchild){
            grandson.classList.remove("black");
        }
    }
}

function setboard(num){
    while(mainframe.firstChild){
        mainframe.removeChild(mainframe.lastChild);
    }
    for(let i=0;i<num;i++){
        let row = document.createElement('div');
        row.classList.add("row");
        for(let i=0;i<num;i++){
            let grid = document.createElement('div');
            grid.classList.add('block2');
            row.appendChild(grid);

        }
        row.classList.add("row");
        mainframe.appendChild(row);
    }
    const blocks2 = document.querySelectorAll('.block2');
    for(const item of blocks2){
    item.addEventListener("mouseover",()=>{item.classList.add("black")});
    item.style.height = getComputedStyle(item).width;
}
    
}

let clearbutton = document.querySelector(".Clear");
clearbutton.addEventListener("click",()=>clearboard());

let button32 = document.querySelector(".thirtytwo");
button32.addEventListener("click",()=>setboard(32));

let button64 = document.querySelector(".sixtyfour");
button64.addEventListener("click",()=>setboard(64));

let button16 = document.querySelector(".sixteen");
button16.addEventListener("click",()=>setboard(16));

