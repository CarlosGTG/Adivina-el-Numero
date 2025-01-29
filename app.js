// el metodo document es para conectar html a js
//  y querselector es para capturalo o traelo y este caso
// lo mete a la variable tit
let numeroSecreto;
let attemp;
let numeroSorteado=[];
let numeroMax=10;
/*
En este caso logicamente function es para crear funciones
pero al momento de crear la etiqueta en html se creo como funcion
por que es lo que va a hacer cuando el usuario de click al boton
y lo que va suceder va a estar en los {}
*/

function VerificarIntentoNum(){

   let numUsuario= parseInt(document.getElementById('IngUsuario').value);
   console.log(numeroSecreto);
  if(numUsuario === numeroSecreto){
    ChangeText('p',`Felicidades adivinaste el numero que era ${numeroSecreto} en ${attemp} ${(attemp ===1)? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
  }else{
if(numUsuario <= numeroSecreto){
 
    ChangeText('p','Lo siento el numero es mayor');

}else{

    ChangeText('p','El numero es Menor :3');

}
attemp++;
Limp()  
if (attemp>3){
    ChangeText('p','Lo sentimos se acabron tus 3 oportunidades, vuelve a intentarlo');
    document.getElementById('reiniciar').removeAttribute('disabled');
}
}
    return;
}
//Esto es para encapsularlas para utilizarlas como metodos
function CondicionesIni() {
    ChangeText('h1','Juego numero secreto!!');
ChangeText('p',`Ingrese un numero del 1 al ${numeroMax}`);
numeroSecreto = CreVarAleat();
attemp=1;
}

// en este caso se le poner # en query selector para poder darle entender que tiene que evaluar esa ID
function Limp() {
    let caja=document.querySelector('#IngUsuario').value= "";
}

function reiniciarG() {
    Limp();
    CondicionesIni();
//En este caso se utiliza setAttribute para volver a asiganarle el atributo disabled a verdadero, a diferencia de remove  
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

function ChangeText(Varia,Text){
 let Textt = document.querySelector(Varia);
Textt.innerHTML=Text;
return;
}

function CreVarAleat() {
let numeGen=Math.floor(Math.random()*numeroMax)+1; 
console.log(numeGen);
console.log(numeroSorteado);
if (numeroSorteado.length ==numeroMax){
    if (numeroSorteado.length == numeroMax) {
        numeroSorteado = []; // Vaciar la lista
        alert("¡Todos los números han sido sorteados! Reiniciando el juego...");
        reiniciarG(); // Reiniciar el juego
        return CreVarAleat(); // Generar un nuevo número secreto
    }else{
    // Para entender mejor la sig parte se lee asi, si el numero generado esta en la lista, con la recursividad se vuelve a llamar y genera otro
    // numero hasta que el numero generaldo no este incluido en la lista
    if (numeroSorteado.includes(numeGen)){

        return CreVarAleat();

    } else{
    //si el numero no esta en la lista, guarda el numero en la lista y lo retorna
        numeroSorteado.push(numeGen);
        return numeGen;

    }
    }

}

CondicionesIni();
}