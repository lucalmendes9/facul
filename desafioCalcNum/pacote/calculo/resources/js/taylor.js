const math = require('mathjs');

$(document).ready(function(){
	
	var expressaoUltima = '';

	function derivaFunc(funcao, grau){
		derivadas = [];
		$('.taylor .rodadas').append('<div class="col-sm-4 cont1"><h2> F(x) = <span></span></h2></div>');
		$('.taylor .rodadas .cont1 h2 span').text(funcao);
		derivadas[0] = $('.taylor .rodadas > div h2 span').text();

		for(var i = 1; i <= grau; i++){
			var k = i+1;
			deriv = math.derivative(derivadas[i-1], 'x');
			$('.taylor .rodadas').append('<div class="col-sm-4 cont'+ k +'"><h2>F<sup>'+ i +'</sup>(x) = <span></span></h2></div>');
			$('.taylor .rodadas .cont'+ k +' h2 span').text(deriv);
			derivadas[i] = $('.taylor .rodadas .cont'+ k +' h2 span').text();
		}
	}

	function resultadosFunc(){
		resultados = [];
		for(var j=0; j < derivadas.length; j++){
			var y = j+1;
			var scope = {x: 0}
			var code = math.compile(derivadas[j]); 
			resultados[j] = code.eval(scope);
			$('.taylor .rodadas .cont'+y+'').after('<div class="col-sm-3 seta'+y+'"><h2>=></h2></div>');
			$('.taylor .rodadas .seta'+y+'').after('<div class="col-sm-3 resp'+y+'"><h2>F(0) = '+resultados[j]+'</h2></div>')
		}
	}

	function resolucao(){
		resolucao = [];
		resolucaoExibe = [];
		divisoes = [];
		resolucaoPart2 = [];
		resolucaoPart2Exibe = [];

		$('.taylor .resultado').append('<h4 class="first"></h4>');
		$('.taylor .resultado').append('<h4 class="second"></h4>');

		for(var z=0; z < resultados.length; z++){
			resolucao[z] = '( '+resultados[z]+'/'+z+'! )*(x-0)^'+z+'';
			resolucaoExibe[z] = '( '+resultados[z]+'/'+z+'! )*(x-0)<sup>'+z+'</sup>';

			divisoes[z] = resultados[z] / math.factorial(z);

			if(divisoes[z] != 0 && divisoes[z] != -0){
				if(z == 0){
					resolucaoPart2[z] = divisoes[z];
					resolucaoPart2Exibe[z] = '( '+divisoes[z]+' )';
				}else if(z == 1){
					resolucaoPart2[z] = '('+divisoes[z]+')*x';
					resolucaoPart2Exibe[z] = '( '+divisoes[z]+' ) * x';
				}else{
					resolucaoPart2[z] = '('+divisoes[z]+')*x^'+z+'';
					resolucaoPart2Exibe[z] = '( '+divisoes[z]+' ) * x<sup>'+z+'</sup>';
				}

			}else{
				resolucaoPart2[z] = 0;
				resolucaoPart2Exibe[z] = '';
			}

			
			if(z == resultados.length-1){
				$('.taylor .resultado h4.first').append('' + resolucaoExibe[z] + '');
				if(resolucaoPart2Exibe[z] != ''){
					$('.taylor .resultado h4.second').append('' + resolucaoPart2Exibe[z] + '');
				}
			}else{
				$('.taylor .resultado h4.first').append('' + resolucaoExibe[z] + ' + ');
				if(resolucaoPart2Exibe[z] != ''){
					$('.taylor .resultado h4.second').append('' + resolucaoPart2Exibe[z] + ' + ');
				}
			}

		}

		resolucaoPart2.forEach(expressaoResolucao);
		expressaoUltima = expressaoUltima.substring(0, expressaoUltima.length-1);
	}

	function expressaoResolucao(item){
		if(item != 0){
			expressaoUltima = expressaoUltima + item +'+';
		}
	}

	$('.taylor #calcular').on('click', function(){
		funcOriginal = $('.taylor #funcao').val();
		grau = $('.taylor #grau').val();

		derivaFunc(funcOriginal, grau);
		resultadosFunc();
		resolucao();

		myPlot = new Fooplot(document.getElementById('plotTaylor'));
		myPlot.addPlot(funcOriginal,FOOPLOT_TYPE_FUNCTION, {'color':'#000'});
		myPlot.addPlot(expressaoUltima,FOOPLOT_TYPE_FUNCTION, {'color':'red'});
		myPlot.reDraw();

	})

});