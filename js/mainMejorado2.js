/*------Validar formulario----*/
function adviceMessage(_id,_advice){
    var id = $(_id)[0];
    //console.log(id[0]);
    //var span = document.createElement('span');
    var idContainer = $(_id).parent().append('<span>'+_advice+'</span>');
    //var span = idContainer.find('span');
    //console.log(span);
    //var content = document.createTextNode(_advice);
    //span.appendChild(content);
    //id.parentNode.appendChild(span);    
}
//eliminar adviceMessage
function deleteAdviceMessage(_id){
    //var id = $(_id)[0];
        var id = $(_id);
    //id.parentNode.removeChild(id.nextSibling);
    id.next().remove();
}
//validar nombre, apellido, correo, password
var validate = {
    isText:function(_string){
        var regex = /([0-9]+)/;//expresion de numeros del 1 al 9
		return !regex.test(_string);
    },
    isEmail:function(_string){
        var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
        return regex.test(_string);              
    },
}

function validateName(){    
    var name = $('#name');    
    if(validate.isText(name.val())){  
        //console.log('letras');
        if(name.next()!==null){
            firstLetterUpperCase('#name');
            deleteAdviceMessage('#name');     
        }           
    }else{
        
        //console.log(name.next().length); 
        if(name.next().length==0){
            adviceMessage('#name','Debe ingresar su nombre');       
        } 
                      
    }       
}

function validateLastname(){
    
    var lastname =$('#lastname');
    if(validate.isText(lastname.val())){
        if(lastname.next()!==null){
            firstLetterUpperCase('#lastname');
            deleteAdviceMessage('#lastname');                
        }        
    }else{
        if(lastname.next().length==0){        
            adviceMessage('#lastname','Debe ingresar su apellido');
        }    
    }     
}

function validateEmail(){
    
    var email = $('#input-email');
    if(validate.isEmail(email.val())){
            deleteAdviceMessage('#input-email');                
               
    }else{        
        adviceMessage('#input-email','Debe ingresar su correo');
    }       
}

function firstLetterUpperCase(_id){    
    var nombre;
        nombre = $(_id).val();
        var arrayNombre=nombre.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    arrayNombre = arrayNombre.join(" ");
    
    return $(_id).val(arrayNombre);  
}

function validatePassword(){
    var contrasena = $("#input-password"); 
    /*console.log(contrasena.val());*/ if(contrasena.val()=="password"||contrasena.val()=="123456"||contrasena.val()=="098754"){        
        adviceMessage("#input-password","Cambie de contraseña");
    }else{
        deleteAdviceMessage('#input-password');
    }
}
function validarSeleccionBicicleta(){
    var bicicleta = $("#seleccionaBicicleta").val();
    //console.log(bicicleta);
    if(bicicleta=='0'){
        adviceMessage("#seleccionaBicicleta","Seleccione un tipo de bicicleta");
    }else{
        deleteAdviceMessage("#seleccionaBicicleta");
    }
}

function signIn(){
    validateEmail();
    validarSeleccionBicicleta();
}