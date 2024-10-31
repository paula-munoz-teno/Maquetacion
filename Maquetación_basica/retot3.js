



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



function filterResult() {
    const name = document.getElementById('name').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const numPeople = document.getElementById('numPeople').value;
    const date = document.getElementById('date').value;


    array.push(objetoliteral);

    if(array[length][2].toUppercase() = CANARIAS){
        console.log(array)
    }
    else if(array[length][2].toUppercase() = MALLORCA ){
        console.log(array)
    }
    else if (array[length][2].touppercase() = GALICIA){
        console.log(array)
    }
    
}

    





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




