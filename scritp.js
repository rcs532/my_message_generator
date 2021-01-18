//fortune teller 3 outputs
//hoy vas a tener -mucha suerte -poca suerte -nada de suerte
//te vas a encontrar -mucho dinero -poco dinero - nada de dinero (dependiendo al output de la suerte)
// El dia va a estar: -nublado -soleado -lluvioso  random porque a al gente le gusta distinto
// dependiendo al result del dia output -usar abrigo -llevar paraguas -usar shorts 
// te vas a casar -en los proximos 10 años, -en los proximos 20 años - te quedaste soltero papa


function getRandomNumber(){
    return Math.floor(Math.random()*3); // retorna numeros entre 0 y 2
}

const resultadosPosibles = {
    _suerte: ["mucha suerte","poca suerte","nada de suerte"],
    _clima: ["nublado","lluvioso","soleado"],
    _casamiento: ["proximos 10 años","proximos 20 años","te quedaste soltero"],
    get suerte(){   
        return "Tendras hoy " + this._suerte[getRandomNumber()];
    },
    get clima(){
        return "El clima sera " + this._clima[getRandomNumber()];
    },
    get casamiento(){
        return "Tu estado matrimonial: " + this._casamiento[getRandomNumber()];
    }
}


const getPronosticoDeDia = (persona)=>{
    let pronCompleto;
    let suerte = resultadosPosibles.suerte;
    let clima = resultadosPosibles.clima;
    let casamiento = resultadosPosibles.casamiento;

    pronCompleto = "Hola "+ persona + " tu pronostico se ve de la siguiente manera: \n" + suerte + "\n" + clima + "\n" + casamiento;
    return pronCompleto;
}

function main(){
    
    let personas = ["Roberto","Maria", "Jose"];
    let pronosticos = [];
    for(let i=0; i<personas.length; i++){
        pronosticos.push(getPronosticoDeDia(personas[i]));
    }

    return pronosticos.join("\n\n");
}

console.log(main());





