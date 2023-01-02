var contagem = 0; //Variável a ser somada;

	function somar(){
			atualizarTela(++contagem); //Atualização de display com valor de contagem somado de 1;
	}

	function reiniciar(){
			contagem = 0;
			atualizarTela(contagem); //Declaração do valor 0 para contagem e print do valor 0;
	}

	function atualizarTela(val) { //Função a ser chamada nas outras funções para atualizar tela;
    		document.getElementById("counter-label").innerHTML = val; //procure o elemento por id entre parenteses no.própriohtml e atribua o valor da variável a ele.
	}