function calculaMaia (numero) {
    let niveis = [];
    let nivel;
    let fatorado = numero;
    while (fatorado!=0) {
        if (fatorado < 20) {
            let fator = fatorado;
            niveis.push(fatorado);
            fatorado -= fator;
            console.log(fatorado, fator);
        } else if (fatorado > 19 && fatorado < 399){
            nivel = parseInt(fatorado / 20);
            let fator = nivel * 20;
            fatorado -= fator;
            niveis.push(nivel);
            if (fatorado == 0) {
                niveis.push(0);
            }
            console.log(fatorado, fator, nivel);
        } else if (fatorado > 399 && fatorado < 7999) {
            nivel = parseInt(fatorado / 400);
            let fator = nivel * 400;
            fatorado -= fator;
            niveis.push(nivel);
            if (fatorado == 0) {
                niveis.push(0,0);
            }
            console.log(fatorado, fator, nivel);
        } else if (fatorado > 7999 && fatorado < 160000) {
            nivel = parseInt(fatorado / 8000);
            let fator = nivel * 8000;
            fatorado -= fator;
            niveis.push(nivel);
            if (fatorado == 0) {
                niveis.push(0,0,0);
            }
            console.log(fatorado, fator, nivel);
        }
        $(document).ready(function() {
            $('#convertido').empty();
        });
    }

    return niveis;
}

function imprimeMaya () {
    let valorGregoriano = document.getElementById('converter').value;
    if (valorGregoriano > 159999) {
        alert ("Essa Calculadora, por enquanto só converte até o Quarto nível (159999)")
    } else {
    let niveis = calculaMaia(valorGregoriano);

        for (let i = 0; i < niveis.length; i++) {
            let valor = niveis[i];
            $(document).ready(function() {
                $('#convertido').append("Neste nível ->" + valor +"<br/>");
            });
            console.log(valor);
        }
    }    
}