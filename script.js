console.log("Welcome to tic tac toe game!!!")
let audioTurn = new Audio("ding2-89720.mp3")
let music2 = new Audio("")
let turn = "X"
let isgameOver = false

// Function for changing the player's turn
function changeTurn() {
    return turn === "X" ? "0" : "X"
}

// Function to check for a winner
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText  === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText != ""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
        }
    })
}

// Main 
let boxex = document.getElementsByClassName("box")
Array.from(boxex).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',() =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    })
})