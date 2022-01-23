const  board =document.querySelector('#board')
const colors=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966']
const SQUARES_NUMBER =500;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover',()=>setColor(square))

    square.addEventListener('mouseleave',()=>removeColor(square))
    
    board.append(square)
}

const setColor=(el)=>{
    const color=getRandomColor()
    el.style.backgroundColor=color
    el.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
    
}
const removeColor = (el) => {
    el.style.backgroundColor='#1d1d1d'
    el.style.boxShadow='0 0 2px #000'
}

const getRandomColor=()=>{
  const index= Math.floor( Math.random()*colors.length)
    return colors[index]
}
