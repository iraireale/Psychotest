var bienestarTest = document.getElementById("psychoTest");
bienestarTest.addEventListener("submit", (e) => {
    e.preventDefault();
});

function verificarRespuestas(){
    var totalPreguntas = 13;
    var puntos = 0;
    var myTest = document.forms["psychoTest"];
    var resultado = document.getElementById("resultado");


    for(var i = 1; i < totalPreguntas; i++){
        if(myTest["p" + i].value === null || myTest["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false; // De esta manera, termino con la ejecución de la función. 
        }
        else{
            if(myTest["p" + i].value === "a"){
                puntos = puntos + 3;
            }else if(myTest["p" + i].value === "b"){
                puntos = puntos + 2;
            }else if(myTest["p" + i].value === "c"){
                puntos = puntos + 1;
            }
        }
    }
    if(puntos >= 30){
        resultado.innerHTML = "Obtuviste " + puntos + " puntos. Eso indica que según la valoración de este test, gozas de bienestar psicológico.";
    }else if( puntos >= 20){
        resultado.innerHTML = "Obtuviste " + puntos + " puntos. Según la valoración de este test, tienes cierto bienestar psicológico, pero quizás hay cosas por resolver.";
    }else if(puntos <= 19){
        resultado.innerHTML = "Obtuviste " + puntos + " puntos. Según la valoración de este test, es probable que debas poner en primer lugar tu estado emocional en este momento.";
    }    
}
