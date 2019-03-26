console.log('The house always wins!')
const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
const color = document.getElementsByTagName('span')
function setCard(param1,param2) {
    const card = document.getElementById(param1.value);
    card.style.color = param2.value
      
} 

function rst() {
    let diamonds = document.getElementById('diamonds')
    let spades = document.getElementById('spades')
    let hearts = document.getElementById('hearts')
    let clubs = document.getElementById('clubs')
    diamonds.style.color = ''
    spades.style.color = ''
    hearts.color = ''
    clubs.style.color = ''
    idInput.value = ''
    colorInput.value = ''
    
    
    
   
}
