
import './style.css'

const input = document.querySelector('[data-js="input"]')
const correctWords = ["de", "da", "do", "dos"]

input.addEventListener('input', (event)=>{
  const h3= document.querySelector('[data-js="result"]')
  const value = event.target.value.toLowerCase().split(' ')




  h3.textContent = value.map((item)=>{
    if(correctWords.includes(item)){
        return item
    }else{
      return item[0].toUpperCase() + item.slice(1).toLowerCase()
    }


  }).join(' ')
})
