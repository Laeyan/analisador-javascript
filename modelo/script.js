var valores = [];
var v = 0;

function okNumber(n) {
    if(n >= 1 && n <= 100){
        return true;
    }else {
        return false;
    }
}
function okLista(n, valores) {
    if(valores.indexOf(n) != -1) {
        return false; //pois ele ja possui na lista
    }else {
        return true;
    }
}

function adicionar() {
    var valor = document.querySelector('#valores');
    var sel = document.querySelector('#sel_val');
    var saida = document.querySelector('#saida');
    var n = Number(valor.value);

    if(okNumber(n) && okLista(n, valores)){
        v++;
        valores.push(n);
        var itemval = document.createElement('option');
        itemval.text = `Valor ${n} adicionado.`;
        itemval.value = `sel${v}`;
        sel.appendChild(itemval);
        valor.textContent = '';
    }else {
        window.alert('Número inválido ou já existente!')
    }
    valor.value = "";
    valor.focus();
}
function finalizar() { 
    if(valores.length == 0 ) {
        window.alert('Insira um número antes de finalizar!')
    }else {
        saida.innerHTML = '';
        pSaida.id = "pSaida";

        var pSaida = document.createElement('p');
        var maior = valores[0];
        var menor = valores[0];
        var total = 0

        for(var p in valores) {
            total += valores[c];
            if(valores[p] > maior) {
                maior = valores[p];
            }
            if(valores[p] < menor) {
                menor = valores[p];
            }
        }

        saida.appendChild(pSaida);
        saida.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.<br>`
        saida.appendChild(pSaida);
        saida.innerHTML += `O maior valor informado foi ${maior}.<br>`
        saida.appendChild(pSaida);
        saida.innerHTML += `O menor valor informado foi ${menor}.<br>`
        saida.appendChild(pSaida);
        saida.innerHTML += `Somando todos os valores, temos ${total}.<br>`
        saida.appendChild(pSaida);
        saida.innerHTML += `A média dos valores digitados é ${total/valores.length}.<br>`
        saida.appendChild(pSaida);
        console.log(valores);
    }
    
}
