
import { boxeo, Funcional } from "./actividades.js";
import { spinning } from "./actividades.js";



const obtenerDias = document.querySelectorAll(`.dia`);
const horariosTabla = document.getElementById(`horariosTabla`);
const tabla = document.getElementById(`tabla-tbody`)

const diasDeClase = document.getElementById(`diasDeClase`)

horariosTabla.style.display = "none";



const infoDelDia = (actividad, dia)=>{


    for(let i=0; actividad.length > i;i++ ){
        let elemento = actividad[i]

        if(dia.value === elemento.id ){


            
            tabla.innerHTML += `
        <tr>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.actividad}</td>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.horario1}</td>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.profesor}</td>
        </tr>
        <tr>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.actividad}</td>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.horario2}</td>
            <td style="border-top:1px solid #fff;padding:7px;"> ${elemento.profesor}</td>
        </tr>
            `


        }
    }
}



obtenerDias.forEach(dia =>{
    dia.addEventListener(`click`,()=>{                           //Array con los dias
        tabla.innerHTML = ` `;
        horariosTabla.style.display ="inline";
        horariosTabla.classList.add("animacion");
        diasDeClase.style.alignItems = "flex-start"
        
        
        infoDelDia(boxeo, dia);
        infoDelDia(spinning, dia);
        infoDelDia(Funcional, dia);
        
        setTimeout(()=>{
            horariosTabla.classList.remove("animacion");
        }, 500)
    })         
})







