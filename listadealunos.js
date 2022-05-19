let listadealunos = ["Tatiane","Andre","Snoopy","Lucy"];
let contador = 0
for (let nome of listadealunos) {

if (nome =="") {
    console.log ("")
    
}

    else if (contador % 2 == 0) {
     resultado="Par"
     console.log (`Esta pessoa se chama:${nome}, posição numero:${contador}, ${resultado}`) 

    }
     else {

       resultado="Impar"
     console.log (`Esta pessoa se chama:${nome}, posição numero:${contador}, ${resultado}`)
        
    }
contador ++
        
}
