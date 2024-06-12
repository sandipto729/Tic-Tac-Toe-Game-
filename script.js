let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turn0=true;

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="X";
            turn0=false;
        }
        else{
            box.innerHTML="O";
            turn0=true;
        }
        box.disabled=true;
        if(checkWinner()){
            reset.click();
        }
        else if (isDraw()) {
            alert("Game Draw");
            reset.click();
        }
    });
});

// alert("Game Draw");
function isDraw() {
    for(let i=0; i<box.length; i++){
        if(box[i].disabled == false){
            return false;
        }
    }
    return true;
}
function checkWinner(){
    for(let i=0;i<win.length;i++){
        let[a,b,c]=win[i];
        if(box[a].innerHTML=="X" && box[b].innerHTML=="X" && box[c].innerHTML=="X"){
            alert("Winner is X");
            return true;
        }
        if(box[a].innerHTML=="O" && box[b].innerHTML=="O" && box[c].innerHTML=="O"){
            alert("Winner is O");
            return true;
        }
    }
    return false;
}


let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    box.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    turn0 = true;
});


