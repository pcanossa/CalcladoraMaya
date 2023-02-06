function converteValor () {
    $(document).ready(function() {
        $('#explicacao').empty();
    });
    var numero = document.getElementById('converter').value;
    if (numero.length > 15) {
        alert ("Aceito números com até 15 dígitos.");
        return false;
    } else {
    let num = numero;
    let niveis = 0;
    let contador = 0;
    var restoArr = [];
    $(document).ready(function() {
        $('#explicacao').append(`<div class='explicanivel'>`);
    });
    for (let i = 0; i < 100; i++) {
        let divisaoVogesimal = parseInt(num/20);
        if (divisaoVogesimal > 0) {
            niveis += 1;
        }
        if (num != 0) {
            restoArr.push(num); 
            console.log(num);
            let imprimeNumero = restoArr[contador];
            $(document).ready(function() {
                $('.explicanivel').append(imprimeNumero+" por 20 = "+divisaoVogesimal+"<br>");
            });
            contador += 1;
        }
        num = divisaoVogesimal;
        console.log(divisaoVogesimal, num, niveis);
        
    }
    $(document).ready(function() {
        $('.explicanivel').append(`O número convertido possui => ${niveis} níveis <br>`);
    });
    $(document).ready(function() {
        $('#explicacao').append(`</div>`);
    });
    let algarismos = [];
    niveis += 1;
    console.log(numero, niveis);
    var numArr = [];
    var elevadoArr = [];
    let sobraArr = [];
    var valorNivel = [];
    for (let i = niveis; i > 0; i--) {
        let divCalculos = "calculosnivel"+i;
        $(document).ready(function() {
            $('#explicacao').append("<div id='"+divCalculos+"' class='calculosnivel'>");
        });
        let tetoValor = i-1;
        console.log(tetoValor);
        let elevado = Math.pow(20, tetoValor);
        let sobra = parseInt(numero/elevado);
        console.log(sobra);
        numArr.push(numero);
        elevadoArr.push(elevado);
        sobraArr.push(sobra);
        let numjq = numArr[niveis-i];
        let elevadoJq = elevadoArr[niveis-i];
        let sobraJq = sobraArr[niveis-i];
        $(document).ready(function() {
            $('#'+divCalculos).append("No nível " +i+ " => " +numjq+ " dividido por " +elevadoJq+ "<br>");
            $('#'+divCalculos).append("Algarismo do nível " +i+ "=> "+sobraJq+" <br>");
        });
        algarismos.push(sobra);
        let valorNivelJq = sobraJq*elevadoJq;
        $(document).ready(function() {
            $('#'+divCalculos).append("Valor do nível = "+sobraJq+"x"+elevadoJq+" = "+valorNivelJq+"<br>");
        });
        sobra = sobra*elevado;
        let valorRestanteJq = numjq - valorNivelJq;
        $(document).ready(function() {
            $('#'+divCalculos).append("Valor restante = >"+numjq+" - "+valorNivelJq+" = "+valorRestanteJq+"<br>");
            $('#'+divCalculos).append(`</div>`);
        });
        numero -= sobra;
        
        console.log(tetoValor, sobra, numero)
        

    }
    $(document).ready(function() {
        $('#convertido').empty();
    });
    $(document).ready(function() {
        $('.imagemalgarismos').empty();
    });

    return algarismos;
    }
}

function imprimeMaya () {
    let niveis = converteValor();
    if (!niveis) {

    }   else {

        for (let i = 0; i < niveis.length; i++) {
            let valor = niveis[i];
            $(document).ready(function() {
                $('#convertido').append("Neste nível ->" + valor +"<br/>");
            });
            console.log(valor);
            
        }


        for (let i = 0; i < niveis.length; i++) {
            let img = `<img src='tree/master/img/${niveis[i]}.png'>`
            $(document).ready(function() {
                $('.imagemalgarismos').append(img);
            });
        }
    }    
    
}