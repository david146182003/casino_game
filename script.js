const body = document.querySelector('body')
const div = document.createElement('div')
div.classList.add('container')

body.appendChild(div)
const form = document.createElement('form')
const input = document.createElement('input')
const button = document.createElement('button')
button.textContent ='submit'
form.appendChild(input)
form.appendChild(button)
div.appendChild(form)
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Enter name')

button.addEventListener('click', (e)=>{
    div.textContent = `Welcome! ${vaildName()}, please verify you are over than 18 or not`
    let over18 = createBtn()
    let under18 = createBtn()
    over18.textContent = "YES"
    under18.textContent = "NO"
    over18.addEventListener('click', ()=>{
        div.textContent ='HAHAHAHA'
    })
    e.preventDefault()
})

const vaildName = ()=>{
    let inputVal = input.value
    if(inputVal ===''){
        alert("must enter name")
        return false
    }
    return inputVal
}

const createBtn =()=>{
    let btn = document.createElement('button')
    return div.appendChild(btn)
}