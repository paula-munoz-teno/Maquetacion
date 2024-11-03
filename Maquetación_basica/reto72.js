    
    //Cuando de a carrito me muestre la lista de la compra y el precio final 

//A. Cuando le de a carrito me muestre el contenedor

    
    function mostrar(){
        document.getElementById("carrito").style.display="block";
    }

//B. Cuando le de a la X, desaparece el contenedor 

    function ocultar(){
        document.getElementById("carrito").style.display="none";
    }
    


    //Cuando pinche en el botón, se añade a ítem del carrito esta información
    //Para cada uno de los botones 


//Código general (precio y prenda) NO ES MOSTRAR ES AÑADIR 

// function mostrarp1(){
//     document.getElementById("pp1").style.display="block";
// }

let array =[];

let numA =20;
let numB=18;
let numC =12;
let numD=22;


function add1(){

    let elemento = document.getElementById("pp1");
    elemento.innerHTML += "<p>Pantalón suelto gris</p>";
    elemento.innerHTML += numA;
    array.push(numA);
}

   

function add2(){

    let elemento = document.getElementById("pp2");
    elemento.innerHTML += "<p>Vestido túnico</p>";
    elemento.innerHTML += numB;
    array.push(numB);
}



function add3(){

    let elemento = document.getElementById("pp3");
    elemento.innerHTML += "<p>Falda Mid Print</p>";
    elemento.innerHTML += numC;
    array.push(numC);
}

function add4(){

    let elemento = document.getElementById("pp4");
    elemento.innerHTML += "<p>Cardigan Rayas</p>";
    elemento.innerHTML += numD;
    array.push(numD);
}


function add5(){

    let elemento = document.getElementById("pp5");
    elemento.innerHTML += "<p>Falda Mini Zebra</p>";
    elemento.innerHTML += numC;
    array.push(numC);
}

function add6(){

    let elemento = document.getElementById("pp6");
    elemento.innerHTML += "<p>Mono overol</p>";
    elemento.innerHTML += numA;
    array.push(numA);
}

function add7(){

    let elemento = document.getElementById("pp7");
    elemento.innerHTML += "<p>Vestido Jersey</p>";
    elemento.innerHTML += numD;
    array.push(numD);
}

function add8(){

    let elemento = document.getElementById("pp8");
    elemento.innerHTML += "<p>Pantalón ancho</p>";
    elemento.innerHTML += numA;
    array.push(numB);
}
     
// let solicitud = arrayfiltrado[i];
// let elemento = document.getElementById("op");
// elemento.innerHTML += "<p>Nombre:</p>";
// elemento.innerHTML += solicitud.nombre;
// elemento.innerHTML += "<p>   </p>";



//C. Total de compras mostrará la suma de las prendas que se hayan añadido

//Se deben ir sumando cuando se de al boton de añadir 

console.log(array)

function addsuma(){
    let elemento = document.getElementById("totalcompra");
    let suma =0
    for (let i=0; i< array.length; i++){
        suma += array[i];
          
        elemento.innerHTML = suma;
    }
    
    
}





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Escribir una función en JavaScript que recoja la información de los campos de texto y cree un
    // objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
    // "solicitar información".


    //Hacer esto por cada prenda: poner un identificador id y crear un objeto literal para cada prenda luego  
//No porque no estás en un formulario. Trabajar con los valores. Si pincho este botón, añado: Prenda x 12 
//al contendor 
//Si pulso el carrito se abre el contenedor y sumo la cantidad 


    



//     let array =[];

//     function requestInfo() {

       
//     let prenda = document.getElementsByClassName("prenda").value;
//     // console.log(nombreprenda)
//     // console.log(prenda)

//     console.log(prenda)
   
//     let precio = document.getElementsByClassName("precio").value;
//     console.log(precio)


//     let objetoliteral ={nombreprenda:prenda, precio:precio};

//     array.push(objetoliteral);
    
//     console.log(array);
// }








    // let prenda = document.getElementsByClassName("prenda");
    // console.log(prenda.value)
    
    
//     let array =[];

//     function requestInfo() {

       
//     let prenda = document.getElementsByClassName("prenda").value;
//     // console.log(nombreprenda)
//     // console.log(prenda)

//     console.log(prenda)
   
//     let precio = document.getElementsByClassName("precio").value;
//     console.log(precio)


//     let objetoliteral ={nombreprenda:prenda, precio:precio};

//     array.push(objetoliteral);
    
//     console.log(array);
// }
