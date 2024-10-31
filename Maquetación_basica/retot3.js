



    // Escribir una función en JavaScript que recoja la información de los campos de texto y cree un
    // objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
    // "solicitar información".
    
    let array =[];

    function requestInfo() {
    const name = document.getElementById('name').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const numPeople = document.getElementById('numPeople').value;
    const date = document.getElementById('date').value;

    let objetoliteral ={nombre:name, origen:origin, destino:destination, numPersonas:numPeople, fecha:date};

    array.push(objetoliteral);
    
    console.log(array);
}

// Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos
// muestre por consola la información de las solicitudes recibidas que tengan como destino
// Canarias, Mallorca o Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
// mayuscula o minuscula).

// Modifica la función anterior para que ahora muestre esos datos en una en la landing page
// maquetada anteriormente

//let array = (A, Bbcn, Cmall, Dpueblo, E, F, G)


   
 
//  let arrayfiltrado =[]

//  function filterResult(){
     
//     let i = 0;
//     for(i=0; i<length; i++)
//     {   arrayfiltrado.push(array[i][2] == galicia.tuUppercase() || 
//         mallorca.tuUppercase() || canarias.tuUppercase())
//        }

//        console.log(arrayfiltrado)
//     }


//let array = (A, Bbcn, Cmall, Dpueblo, E, F, G)
 

let arrayfiltrado =[]

function filterResult(){
    
   let i = 0;
   for(i=0; i<length; i++)
    
   {
    let destinomayus = array[i][2].toUppercase();

    if(destinomayus == GALICIA|| 
   MALLORCA || CANARIAS){
      arrayfiltrado.push(array[i])
     } 
       
   }
   console.log(arrayfiltrado)
}

    // let arrayfiltrado =[]

    // function filterResult(){
        
    //    let i = 0;
    //    for(i=0; i<length; i++)
        
    //    {if(array[i][2] == galicia.tuUppercase() || 
    //     mallorca.tuUppercase() || canarias.tuUppercase()){
    //       arrayfiltrado.push(array[i])
    //      } 
           
    //    }
    //    console.log(arrayfiltrado)
    // }

    // let arrayfiltrado =[]

    // function filterResult(){
        
    //    let i = 0;
    //    let destinomayus = array[0][2].toUppercase();
       
    //    for(i=0; i<length; i++)      
    //    {if(destinomayus == GALICIA|| 
    //     MALLORCA || CANARIAS){
    //       arrayfiltrado.push(array[i])
    //      } 
    //      console.log(arrayfiltrado)  
    //    }
      
    // }







// let runners = [“Pedro”, “Antonio”, “María”, “Lucía”, “Lucas”, “Javier”, “Isabel”,
//     “Jaime”];
//     let text = “”;
//     let i = 0;
    
//     while(i <5)
//     {
//     text += runners[i] + “\n”;
//     i++;
//     }
//     console.log(text)

//     function filterResult(){
     
//         let i = 0;
//         let arrayfiltrado =[]
    
//         for(i=0; i<length; i++)
//         {
//            if (array[i][2] == galicia.tuUppercase() || 
//            mallorca.tuUppercase() || canarias.tuUppercase()){
//             arrayfiltrado.push(array[])
//            }
        
//         }
//      }




//     for(let i=0; i < 5; i++)
//         {
//         console.log(“Bienvenido a Codenotch”);
//         }


//     // for (i<length)



//     // if (i<length){
//     //  let arrayfiltrado = array[i][]

//     // }



// }





// function filterResult() {
//     const name = document.getElementById('name').value;
//     const origin = document.getElementById('origin').value;
//     const destination = document.getElementById('destination').value;
//     const numPeople = document.getElementById('numPeople').value;
//     const date = document.getElementById('date').value;


//     array.push(objetoliteral);

//     ifarray[]
//         console.log(array)
//     }
//     else if(array[length][2].toUppercase() = MALLORCA ){
//         console.log(array)
//     }
//     else if (array[length][2].touppercase() = GALICIA){
//         console.log(array)
//     }
    
// }

    





        // if(array[length][2].toUppercase() = CANARIAS){
        //     console.log(array)
        // }
        // else if(array[length][2] = mallorca.toUppercase()){
        //     console.log(array)
        // }
        // else if (array[length][2] = galicia.toUppercase()){
        //     console.log(array)
    

// function filterResult() {
//     const name = document.getElementById('name').value;
//     const origin = document.getElementById('origin').value;
//     const destination = document.getElementById('destination').value;
//     const numPeople = document.getElementById('numPeople').value;
//     const date = document.getElementById('date').value;

//     let objetoliteral ={nombre:name, origen:origin, destino:destination, numPersonas:numPeople, fecha:date};

//     let array =[];

//     array.push(objetoliteral);

//     if(array[length][2] = galicia.toUppercase() || mallorca.toUppercase() || galicia.toUppercase()){
//         console.log(array)
//     }
    


    // if(destination == galicia.toUppercase() || mallorca.toUppercase() || galicia.toUppercase()){
    //     let array=[];
    //     array.push(name, origin, destination, numPeople, date);
    //     console.log(array);
    // }