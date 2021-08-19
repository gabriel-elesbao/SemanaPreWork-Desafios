import './style.css'

const app = document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>

`

const appClass = document.querySelector('.app')
const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', (event)=>{
  event.preventDefault()
  if(appClass.style.visibility === 'visible'){
    link.innerHTML='Clique aqui para exibir'
     appClass.style.visibility ='hidden'
  }else{
    appClass.style.visibility ='visible'

  }


}, false)




