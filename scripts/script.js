function pegaValor () {
    let numero = document.getElementById('converter').value;
    return numero;
}


function converteValor () {
    let numero = pegaValor();
    let niveis = 0;
    for (let i = 0; i < 100; i++) {
        let divisaoVogesimal = parseInt(numero/20);
        if (divisaoVogesimal > 0) {
            niveis += 1;
        }
        numero = divisaoVogesimal;
        console.log(divisaoVogesimal, numero, niveis);
    }
    let algarismos = [];
    niveis += 1;
    numero = pegaValor();
    console.log(numero, niveis);
    for (let i = niveis; i > 0; i--) {
        let tetoValor = i-1;
        console.log(tetoValor);
        let elevado = Math.pow(20, tetoValor);
        let sobra = parseInt(numero/elevado);
        console.log(sobra);
        algarismos.push(sobra);
        sobra = sobra*elevado;
        numero -= sobra;
        console.log(tetoValor, sobra, numero)
        

    }
    $(document).ready(function() {
        $('#convertido').empty();
    });

    return algarismos;
}

function imprimeMaya () {
    let niveis = converteValor();

        for (let i = 0; i < niveis.length; i++) {
            let valor = niveis[i];
            $(document).ready(function() {
                $('#convertido').append("Neste nível ->" + valor +"<br/>");
            });
            console.log(valor);
        }
    
}