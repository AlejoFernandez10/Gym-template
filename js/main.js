const cartContainer =document.getElementById(`cartContainer`);
const carritoCounter = document.getElementById(`carritoCounter`)
const carritoIcon = document.getElementById(`carritoIcon`)
const mainContainer = document.getElementById(`mainContainer`)
const mainTitle = document.getElementById(`clasesTitle`);

const cartItemContainer = document.getElementById(`cartItemContainer`)


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

const header = document.getElementById(`header`);

window.addEventListener("scroll", ()=>{
    header.style.backgroundColor = `#000 !important`
    header.classList.toggle("reaparecer", window.scrollY > 500);
    
})





const mostrarCarrito = ()=>{

    cartContainer.style.display = "inline"
}

mainContainer.addEventListener(`click`, ()=>{
    cartContainer.style.display = "none"
})

//SWEET ALERT

const adquirirBtn = document.querySelectorAll(`.adquirir-planBtn`);

adquirirBtn.forEach(btn =>{

    btn.addEventListener(`click`,()=>{
        carritoCounter.innerHTML = 1;
        Swal.fire({
            title: 'Plan agregado!',
            text: `Su plan fue agregado al carrito correctamente.`,
            icon: 'success',            
            
          })

          if(sessionStorage.getItem(`plan`) != null | sessionStorage.getItem(`plan`) != undefined){
            Swal.fire({
                title: 'Plan reemplazado',
                text: `Su carrito fue actualizado correctamente.`,
                icon: 'success',            
                
              })
        }

        sessionStorage.setItem( `plan`,btn.parentElement.parentElement.firstElementChild.innerText )       
        sessionStorage.setItem(`planPrecio`,btn.parentElement.parentElement.lastElementChild.previousElementSibling.firstElementChild.innerText)
                
        

        const carritoItem = `
                        <div class="card-body p-4" >
                                          <div class="row d-flex justify-content-between align-items-center">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                              <img
                                                src="./assets/gym-equipment (1).png"
                                                class="img-fluid rounded-3" alt="plan">
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-4">
                                              <p class="lead fw-normal mb-2" id="plan-title-cart">${sessionStorage.getItem(`plan`)}</p>

                                            </div>

                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                              <h5 class="mb-0">${sessionStorage.getItem(`planPrecio`)}</h5>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                              <a href="#!" class="text-danger" onclick="vaciarCarrito()"><img src="./assets/bin.png" alt="" ></a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                        `

        cartItemContainer.innerHTML = carritoItem;

        
    })

})


const vaciarCarrito = ()=>{
    sessionStorage.clear()
    carritoCounter.innerHTML = 0
    cartItemContainer.innerHTML = ` `;
    
    Swal.fire({
        title: 'Carrito vacío',
        text: `El carrito se vació correctamente`,
        icon: 'success',            
        
      })
}

/* console.log(sessionStorage.getItem(`planPrecio`))
 */


