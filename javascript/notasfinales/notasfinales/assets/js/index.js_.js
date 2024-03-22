function ingresarnotas() {
    // Declaracion de variables
    var n1_html = document.getElementById("n1_html");
    var n2_html = document.getElementById("n2_html");
    var n3_html = document.getElementById("n3_html");
    var p_html = document.getElementById("p_html");

    var n1_css = document.getElementById("n1_css");
    var n2_css = document.getElementById("n2_css");
    var n3_css = document.getElementById("n3_css");
    var p_css = document.getElementById("p_css");

    var n1_js = document.getElementById("n1_js");
    var n2_js = document.getElementById("n2_js");
    var n3_js = document.getElementById("n3_js");
    var p_js = document.getElementById("p_js");

    // Ingreso de notas
    n1_html.innerHTML = parseInt(prompt("Ingrese nota 1 [HTML]"));
    n2_html.innerHTML = prompt("Ingrese nota 2 [HTML]");
    n3_html.innerHTML = prompt("Ingrese nota 3 [HTML]");

    n1_css.innerHTML = prompt("Ingrese nota 1 [CSS]");
    n2_css.innerHTML = prompt("Ingrese nota 2 [CSS]");
    n3_css.innerHTML = prompt("Ingrese nota 3 [CSS]");

    n1_js.innerHTML = prompt("Ingrese nota 1 [JS]");
    n2_js.innerHTML = prompt("Ingrese nota 2 [JS]");
    n3_js.innerHTML = prompt("Ingrese nota 3 [JS]");


    // Calcular promedio
    p_html.innerHTML = (parseInt(n1_html.innerHTML) + parseInt(n2_html.innerHTML) + parseInt(n3_html.innerHTML)) / 3;
    p_css.innerHTML = (parseInt(n1_css.innerHTML) + parseInt(n2_css.innerHTML) + parseInt(n3_css.innerHTML)) / 3;
    p_js.innerHTML = (parseInt(n1_js.innerHTML) + parseInt(n2_js.innerHTML) + parseInt(n3_js.innerHTML)) / 3;


    // Para obtener el valor del inner html de un tag en DOM:
    var texto = document.getElementById("n1_html").innerHTML;
    var texto = $("n1_html").html;



/*












    numero1.innerHTML = prompt("Ingrese un número")
    numero2.innerHTML = prompt("Ingrese otro número")
    operador.innerHTML = prompt("Ingrese la operación *(multiplicación), + (suma), - (resta), / (división)")


    if (operador.innerHTML == "+") {
        resultado.innerHTML = parseInt(numero1.innerHTML) + parseInt(numero2.innerHTML);
    }

    if (operador.innerHTML == "-") {
        resultado.innerHTML = parseInt(numero1.innerHTML) - parseInt(numero2.innerHTML);
    }

    if (operador.innerHTML == "*") {
        resultado.innerHTML = parseInt(numero1.innerHTML) * parseInt(numero2.innerHTML);
    }

    if (operador.innerHTML == "/") {
        resultado.innerHTML = parseInt(numero1.innerHTML) / parseInt(numero2.innerHTML);
    }


    //Si el operador usa signo + entonces muestre resultado de suma entre numero 1 y numero 2
    //Si el operador usa signo - entonces muestre resultado de suma entre numero 1 y numero 2
    //Si el operador usa signo * entonces muestre resultado de suma entre numero 1 y numero 2
    //Si el operador usa signo / entonces muestre resultado de suma entre numero 1 y numero 2
    */
}