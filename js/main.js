const mainTitle = document.getElementById(`clasesTitle`);




const efectoEscritura = (text = '', time = 0, etiqueta = '') => {

    
    let arrayCH = text.split('');
    etiqueta.innerHTML = '';
    let counter = 0;
    let borrador = text.length;

    setInterval(()=>{
        if( counter === arrayCH.length){
            etiqueta.innerHTML = text.substring(0, borrador)                //Animacion titulo seccion Clases
            borrador--;
            if(borrador === 0){
                etiqueta.innerHTML = ``;
                counter = 0
                borrador = text.length
            }
        }else{            
            etiqueta.innerHTML += arrayCH[counter];
            counter++
        
        }         


    }, time)
}    



mainTitle.style.color = "#eee"

efectoEscritura(`TENEMOS TODO LO QUE BUSCÁS`, 80, mainTitle);




//EFECTO on-scroll NAV


window.addEventListener("scroll", ()=>{
    const header = document.getElementById(`header`);
    header.classList.toggle("reaparecer", window.scrollY > 500);
})


