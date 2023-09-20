let music = new Audio("music.mp3");
let gameover1 = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let turn ="X";
let gameover= false;

const changeTurn =()=>{
    return turn==="X"? "0" :"X"
}
let checkWin =()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText=== boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
        document.querySelector('.button').innerText= boxtext[e[0]].innerText+"won";
        gameover=true;
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width ="250px";
        }
    })
    
}
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            boxtext.innerText= turn;
            turn=changeTurn();
            ting.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("button")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})
// let reset=document.getElementsByClassName("reset");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover=false
    document.getElementsByClassName("button")[0].innerText  = "Turn for " + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width ="0px";
})

