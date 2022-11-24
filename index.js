if(document.readyState=='loading'){
document.addEventListener('DOMContentLoaded',ready)
}
else{
ready()
}

function ready(){
//add event listeners
var buyTicket = document.getElementsByClassName('tour-btn')

for(var i=0;i<buyTicket.length;i++){
var buttonBuyTicket = buyTicket[i]
buttonBuyTicket.addEventListener('click',tiketbought)
}
}

//events
function tiketbought(event){
var button = event.target
var ticket = button.parentElement
var tourDate = ticket.getElementsByClassName('tour-date')[0].innerText
var tourCity = ticket.getElementsByClassName('tour-city')[0].innerText
var tourArena = ticket.getElementsByClassName('tour-arena')[0].innerText
console.log(tourDate,tourCity,tourArena)
}