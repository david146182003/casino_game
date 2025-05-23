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
    let inputVal = inputName.value
    if(inputVal ===''){
        alert("must enter name")
        inputName.focus();
        return false
    }
    h1.textContent = `Welcome player:  ${inputVal}`
    div.textContent = `Please verify you are over than 18 or not`
    let over18 = createBtn()
    let under18 = createBtn()
    over18.textContent = "YES"
    under18.textContent = "NO"
    over18.addEventListener('click', ()=>{
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
        startGame.addEventListener('click', (e)=>{
            e.preventDefault();
            let randomCard = Math.floor(Math.random()*10+1)
            let randomCard2 = Math.floor(Math.random()*10+1)
            cards.textContent = `cards: ${randomCard}   ,   ${randomCard2}`
            sum.textContent ="Sum:  " + (randomCard + randomCard2)
            p1.textContent =`your sum is :  ${randomCard + randomCard2}, do you want more card?`
            
        })
    })
})

// const vaildName = ()=>{
//     let inputVal = inputName.value
//     if(inputVal ===''){
//         alert("must enter name")
//         inputName.focus();
//         return false
//     }else{
//         div.textContent = `Welcome! ${vaildName()}, please verify you are over than 18 or not`
//         let over18 = createBtn();
//         let under18 = createBtn();
//         over18.textContent = "YES"
//         under18.textContent = "NO"
//         over18.addEventListener('click', ()=>{
//         div.textContent ='HAHAHAHA'
//         })
        
//     }
    
// }

const createBtn =()=>{
    let btn = document.createElement('button')
    return div.appendChild(btn)
}

