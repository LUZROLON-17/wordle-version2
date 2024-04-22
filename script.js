let intentos=6
let lista=["GORDO","RATON","PEINE","CAJON","ACTOR","CIEGO","COLOR","METER","SACAR","SALIR","ACTOR"]
let posicion= Math.floor(Math.random ()*lista.length)
// console.log("elemento",lista.length);
// console.log("random",Math.floor(Math.random ()*lista.length))

let palabraAdivinar=lista[posicion]
console.log(palabraAdivinar)

const BOTON= document.getElementById("guess-button")
console.log(BOTON)

BOTON.addEventListener("click",intentar)


function intentar(){
    const intento= leerIntento();
    const DRID=document.getElementById("grid");
    const ROW=document.createElement("div");
    ROW.className="row";
    console.log("div" ,ROW)

        intentos = intentos -1;
         console.log("Te quedan",intentos,"intentos")
        for(let pos in palabraAdivinar){
const SPAN=document.createElement("span")   
SPAN.className="letter";
SPAN.innerHTML=intento[pos]
            if(intento[pos]===palabraAdivinar[pos]){
                console.log(intento[pos],"Verde");
               SPAN.style.backgroundColor="green"
            }else if(palabraAdivinar.includes(intento[pos])){
                console.log(intento[pos],"Amarillo")
                SPAN.style.backgroundColor="yellow"
            }else{
                console.log(intento[pos],"Gris")
                SPAN.style.backgroundColor="grey"
            } 
            ROW.appendChild(SPAN);
            DRID.appendChild(ROW);
            if (palabraAdivinar===intento){
        terminar("<h1>GANASTE!😀</h1>")
    
        }
     } 
     
     if(intentos== 0){
    terminar("<h1>PERDISTE!😖</h1>")
     }
function leerIntento(){
     let intento = document.getElementById("guess-input").value;
   console.log(intento)
     intento = intento.toUpperCase(); 
    return intento;}

function terminar(mensaje){
    let estado=document.getElementById("guesses");
    const INPUT=document.getElementById("guess-input")
    INPUT.disabled=true
    BOTON.disabled=true;
    estado.innerHTML=mensaje;
    console.log(estado,mensaje);
}
}
