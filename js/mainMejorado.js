function validateForm(event){        
    validarNoVacio();
    validarCorreo();
    validarContraseña();
    validarSeleccionBicicleta();        
}

function validarNoVacio(){
    var nombre, apellidos, correo, contrasena, expresion, bicicleta;
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("lastname").value;
    correo = document.getElementById("input-email").value;
    contrasena = document.getElementById("input-password").value;
    bicicleta = document.getElementById("seleccionaBicicleta").value;
    expresion = /\w+@\w+\.+[a-z]/;
    if( nombre === ""){
        var elemento = document.createElement("span");
        var contenidoElemento = document.createTextNode("Debe ingresar su nombre");
        elemento.appendChild(contenidoElemento);    
        var padre = document.getElementById("divName");
        padre.appendChild(elemento);   
    }
    if(apellidos === ""){
        var elementoApellido = document.createElement("span");
        var contenidoApellido = document.createTextNode("Debe ingresar su apellido");
        elementoApellido.appendChild(contenidoApellido);    
        var padreApellido = document.getElementById("divLastName");
        padreApellido.appendChild(elementoApellido);  
    }
    if( correo === ""){
        var elementoCorreo = document.createElement("span");
        var contenidoElementoCorreo = document.createTextNode("Debe ingresar su correo");
        elementoCorreo.appendChild(contenidoElementoCorreo);    
        var padreCorreo = document.getElementById("divCorreo");
        padreCorreo.appendChild(elementoCorreo);   
    }
    if( contrasena === ""){
        var elementoContrasena = document.createElement("span");
        var contenidoElementoContrasena = document.createTextNode("Debe ingresar su contraseña");
        elementoContrasena.appendChild(contenidoElementoContrasena);    
        var padreContrasena = document.getElementById("divContrasena");
        padreContrasena.appendChild(elementoContrasena);   
    }
    if(bicicleta=="0"){
        var elementoBicicleta= document.createElement("span");
        var contenidoElementoBicicleta = document.createTextNode("Seleccione un tipo de bicicleta");
        elementoBicicleta.appendChild(contenidoElementoBicicleta);    
        var padreBicicleta = document.getElementById("divTipoBicileta");
        padreBicicleta.appendChild(elementoBicicleta);
    }
    
}
function keyUPvalidarNombre(){    
    validarNombreApellido("name");
}
function keyUPvalidarApellido(){    
    validarNombreApellido("lastname");
}
function validarNombreApellido(_nombreOapellido){
    var key_code = window.event.keyCode;    
        if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
            var nombreOapellido = document.getElementById(_nombreOapellido).value;
            var arrayNombre=nombreOapellido.split(" ");
            var minusculas="";
            for(var i=0;i<arrayNombre.length;i++){
                if(arrayNombre[i]!=""){
                minusculas = arrayNombre[i].slice(1);
                arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas; 
                }
            }    
            document.getElementById(_nombreOapellido).value = arrayNombre.join(" ");   
            quitarSpan(_nombreOapellido);
        }else{
           alert("Solo se acepta caracteres de A-Z");  
        }   
}
function quitarSpan(_input){
    var input;
    input = document.getElementById(_input);
    if(input.nextElementSibling!=null){
    input.parentNode.removeChild(input.nextElementSibling);   
    }
}
function validarCorreo(){
    var expresion = /\w+@\w+\.+[a-z]/;
    var correo = document.getElementById("input-email").value;
    if(!expresion.test(correo)){
            var elementoCorreo = document.createElement("span");
            var contenidoElementoCorreo = document.createTextNode("Correo invalido");
            elementoCorreo.appendChild(contenidoElementoCorreo);    
            var padreCorreo = document.getElementById("divCorreo");
            padreCorreo.appendChild(elementoCorreo);
        }
}
function validarContraseña(){
    var contrasena = document.getElementById("input-password").value;    if(contrasena=="password"||contrasena=="123456"||contrasena=="098754"){
        var elementoContrasena = document.createElement("span");
        var contenidoElementoContrasena = document.createTextNode("Cambie de contraseña");
        elementoContrasena.appendChild(contenidoElementoContrasena);    
        var padreContrasena = document.getElementById("divContrasena");
        padreContrasena.appendChild(elementoContrasena);
    }
}
function validarSeleccionBicicleta(){
    var bicicleta = document.getElementById("seleccionaBicicleta").value;
    if(bicicleta=="0"){
        var elementoBicicleta= document.createElement("span");
        var contenidoElementoBicicleta = document.createTextNode("Seleccione un tipo de bicicleta");
        elementoBicicleta.appendChild(contenidoElementoBicicleta);    
        var padreBicicleta = document.getElementById("divTipoBicileta");
        padreBicicleta.appendChild(elementoBicicleta);
    }
}

