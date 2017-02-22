/*------El campo Nombre y apellido solo acepta caracteres de A-Z ----*/
    function primerCaracMayusculaN(){
        var nombre;
        nombre = document.getElementById("name").value;
        var arrayNombre=nombre.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    arrayNombre = arrayNombre.join(" ");
    
    return document.getElementById("name").value = arrayNombre; 
    }
    function validateName(){    
        var key_code = window.event.keyCode;
        if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
            primerCaracMayusculaN();
            quitarSpan("name");
        }else{
           alert("Solo se acepta caracteres de A-Z");  
        }        
    }
    /*-------------------Apellido-------------------*/
    function primerCaracMayusculaS(){
        var apellidos;
        apellidos = document.getElementById("lastname").value;
        var arrayNombre=apellidos.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    //return document.getElementById("name").value = arrayNombre;
    arrayNombre = arrayNombre.join(" ");
    
    return document.getElementById("lastname").value = arrayNombre; 
    }
    function validateNameS(){    
        var key_code = window.event.keyCode;
        if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
            primerCaracMayusculaS();   
            quitarSpan("lastname");
        }else{
           alert("Solo se acepta caracteres de A-Z");  
        }        
    }
    /*---------------End----Apellido-------------------*/
    /*---------End----El campo Nombre y apellido solo acepta caracteres de A-Z --------------*/
/*-------------Quitar el mensaje en span si hay texto en input-------------*/
function quitarSpan(_input){
    var input;
    input = document.getElementById(_input);
    input.parentNode.removeChild(input.nextElementSibling);   
}
/*----------End---Quitar el mensaje en span si hay texto en input---------*/
/*--Crear un span que contenga un mensaje de feedback para el formulario---*/
function creandoSpan(_mensaje,_id){
    var elemento = document.createElement("span");
    var contenidoElemento = document.createTextNode(_mensaje);
    elemento.appendChild(contenidoElemento);    
    var padre = document.getElementById(_id);
    return padre.appendChild(elemento);
    console.log("in");
}
/*----------End---Quitar el mensaje en span si hay texto en input---------*/
/*-------------Validar--------------*/
function validateForm(evt){
    evt.preventDefault();
    var nombre, apellidos, correo, contrasena, expresion, bicicleta;
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("lastname").value;
    correo = document.getElementById("input-email").value;
    contrasena = document.getElementById("input-password").value;
    bicicleta = document.getElementById("seleccionaBicicleta").value;
    expresion = /\w+@\w+\.+[a-z]/;
    
    if( nombre === ""){
        //console.log("in0");
        //creandoSpan("Debe ingresar su nombre","name");
        var elemento = document.createElement("span");
        var contenidoElemento = document.createTextNode("Debe ingresar su nombre");
        elemento.appendChild(contenidoElemento);    
        var padre = document.getElementById("divName");
        padre.appendChild(elemento);   
    }
    if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    if(apellidos === ""){
        var elementoApellido = document.createElement("span");
        var contenidoApellido = document.createTextNode("Debe ingresar su apellido");
        elementoApellido.appendChild(contenidoApellido);    
        var padreApellido = document.getElementById("divLastName");
        padreApellido.appendChild(elementoApellido);  
    }  
    if(apellidos.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    if( correo === ""){
        var elementoCorreo = document.createElement("span");
        var contenidoElementoCorreo = document.createTextNode("Debe ingresar su correo");
        elementoCorreo.appendChild(contenidoElementoCorreo);    
        var padreCorreo = document.getElementById("divCorreo");
        padreCorreo.appendChild(elementoCorreo);   
    }else{
        if(!expresion.test(correo)){
            var elementoCorreo = document.createElement("span");
            var contenidoElementoCorreo = document.createTextNode("Correo invalido");
            elementoCorreo.appendChild(contenidoElementoCorreo);    
            var padreCorreo = document.getElementById("divCorreo");
            padreCorreo.appendChild(elementoCorreo);
        }
    }
    if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    if( contrasena === ""){
        var elementoContrasena = document.createElement("span");
        var contenidoElementoContrasena = document.createTextNode("Debe ingresar su contraseña");
        elementoContrasena.appendChild(contenidoElementoContrasena);    
        var padreContrasena = document.getElementById("divContrasena");
        padreContrasena.appendChild(elementoContrasena);   
    }
    if(contrasena.length<6){
        var elementoContrasena = document.createElement("span");
        var contenidoElementoContrasena = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
        elementoContrasena.appendChild(contenidoElementoContrasena);    
        var padreContrasena = document.getElementById("divContrasena");
        padreContrasena.appendChild(elementoContrasena); 
    }
    if(contrasena=="passware"||contrasena=="123456"||contrasena=="098754"){
        var elementoContrasena = document.createElement("span");
        var contenidoElementoContrasena = document.createTextNode("La contraseña debe contener caracteres, mayusculas, números");
        elementoContrasena.appendChild(contenidoElementoContrasena);    
        var padreContrasena = document.getElementById("divContrasena");
        padreContrasena.appendChild(elementoContrasena);
    }
    /*---------Seleccionar un tipo de bicicleta----------*/
    if(bicicleta=="0"){
        var elementoBicicleta= document.createElement("span");
        var contenidoElementoBicicleta = document.createTextNode("Seleccione un tipo de bicicleta");
        elementoBicicleta.appendChild(contenidoElementoBicicleta);    
        var padreBicicleta = document.getElementById("divTipoBicileta");
        padreBicicleta.appendChild(elementoBicicleta);
    }
    
    /*---------End----Validar--------------*/
 
}