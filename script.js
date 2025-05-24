
const body = document.querySelector('body')
const div = document.querySelector('.container')
const form = document.getElementById('form')
const inputName = document.getElementById('nameId')
const buttonGo = document.querySelector('#go')
const h1 = document.createElement('h1')
body.prepend(h1)
h1.textContent ="Happy Casino "
h1.style.textAlign = 'center'
buttonGo.textContent ='Go'
inputName.setAttribute('placeholder', 'Enter name')

buttonGo.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputVal = inputName.value;
    const nameRegex = /^[A-Za-z]+$/;
    if(inputVal ==='' || !nameRegex.test(inputVal) ){
        alert("Must enter name without number and space")
        inputName.focus();
        return false
    }else if(inputVal.length<3 || inputVal.length>20){
        alert("Your name must include more than 3 characters and less than 20")
        inputName.focus();
        return false
    }
    h1.textContent = `Welcome player:  ${inputVal}`
    div.textContent = `Please verify you are over than 18 or not`
    let over18 = createBtn()
    let under18 = createBtn()
    over18.textContent = "YES"
    under18.textContent = "NO"
    under18.addEventListener('click', handleUnder18)
    over18.addEventListener('click', (e)=>{
        e.preventDefault()
        h1.textContent = 'BlackJack Game'
        div.textContent =''
        let p1 =document.createElement('div') 
        let cards= document.createElement('div')
        let sum = document.createElement('div')
        let startGame = document.createElement('button')
        let newCard = document.createElement('button')
        div.appendChild(p1)
        div.appendChild(cards)
        div.appendChild(sum)
        div.appendChild(startGame)
        div.appendChild(newCard)
        p1.style.textAlign ="center"
        p1.textContent = 'Press Button to Start'
        cards.style.textAlign ="center"
        cards.textContent= "cards: "
        sum.style.textAlign ="center"
        sum.textContent = `sum: `
        startGame.style.width="100px"
        startGame.textContent ="Start Game"
        newCard.style.width="100px"
        newCard.textContent ="New card"
        let cardArr =[];
        let sumEl = 0;
        startGame.addEventListener('click', (e)=>{
            cardArr=[];
            sumEl = 0;
            e.preventDefault();
            let randomCard = Math.floor(Math.random()*10+1)
            let randomCard2 = Math.floor(Math.random()*10+1)
            cardArr.push(randomCard, randomCard2)
            sumEl += (cardArr[0] + cardArr[1])
            cards.textContent = `cards: ${cardArr[0]}   ,   ${cardArr[1]}`
            sum.textContent ="Sum:  " + sumEl
            p1.textContent =`do you want more card?`
})
        newCard.addEventListener('click', (e)=>{
            e.preventDefault();
            p1.textContent =`do you want more card?`
            let randomCard3 = Math.floor(Math.random()*10+1);
            cardArr.push(randomCard3)
            sumEl += randomCard3
            sum.textContent ="Sum:  " + sumEl
            if(sumEl ===21){
                p1.innerHTML = `<h1>BlackJack!! 21</h1> <p>Press start a new game`
            }else if(sumEl >21){
                p1.innerHTML =`<h2>Too many! You lose.</h2>  <p>Press start a new game</p>`
                
            }
            let lastCard =cardArr[cardArr.length-1]

            if(cardArr.length ===1){
                cards.textContent = `cards: ${cardArr[0]}`
            }else if(cardArr.length ===2){
                cards.textContent = `cards: ${cardArr[0]}  ,  ${cardArr[1]}`
            }else if(cardArr.length ===3){
                cards.textContent = `cards: ${cardArr[0]}   ,   ${cardArr[1]}  , ${cardArr[2]}`
            }
            else if(cardArr.length ===4){
                cards.textContent = `cards: ${cardArr[0]}   ,   ${cardArr[1]}  , ${cardArr[2]} ,${cardArr[3]}`
            }else if(cardArr.length ===5){
                cards.textContent = `cards: ${cardArr[0]}   ,   ${cardArr[1]}  , ${cardArr[2]} ,${cardArr[3]}, ${cardArr[4]}`
            }
            
            
        })
       

    })
})



 const handleUnder18 =(event)=>{
            event.preventDefault();
            alert('Sorry, you are not allowed to play')

        }
const vaildName = ()=>{
    
}


const createBtn =()=>{
    let btn = document.createElement('button')
    return div.appendChild(btn)
}

