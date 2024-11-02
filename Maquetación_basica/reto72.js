    // Escribir una función en JavaScript que recoja la información de los campos de texto y cree un
    // objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
    // "solicitar información".
    
    let array =[];

    function recojotInfo() {
    const nombreprenda = document.getElementById('nombreprenda').value;
    const precio = document.getElementById('precio').value;

    let objetoliteral ={nombreprenda:nombreprenda, precio:precio};

    array.push(objetoliteral);
    
    console.log(array);
}
