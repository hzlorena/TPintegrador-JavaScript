function resultado() {
    var precio = 200;
    var resultado;
    var cant = document.getElementById('cantidad').value;

    if(cant < 0){
        alert("Cantidad NO debe ser número negativo");
       
    }

    //OBTENGO EL PRECIO CON DESCUENTOS

    var lista = document.getElementById('seleccion');
    // Obtener el valor de la opción seleccionada
    var valorSeleccionado = lista.options[lista.selectedIndex].value;

    if(valorSeleccionado == 1){
        resultado = precio - (precio * 0.8);
    }else{
        if(valorSeleccionado == 2){
            resultado = precio - (precio * 0.5);
        }else{
            resultado = precio - (precio * 0.15);
        }
    }
    if(cant > 0){
        document.getElementById('salida').value = cant * resultado;
    }else{
        document.getElementById('salida').value = "";
        document.getElementById('cantidad').value = "";
    }
    
}
