const math = require('mathjs');

$(document).ready(function(){

	var cont = 0;
	function derivateFunc(express){
		funcDerivated = math.derivative(express, 'x');
		$('.raphson .resultDerivate label span').text(funcDerivated);
		expFuncDerivate = $('.raphson .resultDerivate label span').text();
	}
	function calcXk(value1,value2){
		xk = ((value1 + value2) / 2);
	}
	function calcFXk(express, value){
		var scope = {x: value}
		var code = math.compile(express); 
		fxk = code.eval(scope);
	}
	function calcFlinhaXk(express, value){
		var scope = {x: value}
		var code = math.compile(express); 
		flinhaxk = code.eval(scope);
	}
	function calcXk1(value1,value2,value3){
		xk1 = (value1 - (value2/value3));
	}
	function calcFXk1(express, value){
		var scope = {x: value}
		var code = math.compile(express); 
		fxk1 = code.eval(scope);
	}
	function writeContent(){
		console.log('write');
		$('.raphson #plotRaphson').before('<div class="row blocoInfos conteudo'+cont+'"></div>');
		$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>'+xk.toFixed(3)+'</p></div>');
		$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>'+fxk.toFixed(3)+'</p></div>');
		$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>'+flinhaxk.toFixed(3)+'</p></div>');
		$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>'+xk1.toFixed(3)+'</p></div>');
		$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>'+fxk1.toFixed(5)+'</p></div>');
		if(Math.abs(fxk1) > erro){
			$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>NOK</p></div>');
		}else{
			$('.raphson .conteudo'+cont+'').append('<div class="col-sm-2"><p>OK</p></div>');
		}
	}
	function replaceAll(str, de, para){
	    var pos = str.indexOf(de);
	    while (pos > -1){
			str = str.replace(de, para);
			pos = str.indexOf(de);
		}
	    return (str);
	}

	$('.raphson #calcular').on('click', function(){
		expFunc = $('.raphson #funcao').val();
		erro = Math.abs($('#erro').val());
		var firstInterv = parseFloat($('.raphson #intervalo_de').val());
		var secondInterv = parseFloat($('.raphson #intervalo_ate').val());
		derivateFunc(expFunc);
		calcXk(firstInterv, secondInterv);

		do{
			if(cont > 0){
				xk = xk1;
			}
			cont++;
			calcFXk(expFunc, xk);
			calcFlinhaXk(expFuncDerivate, xk);
			calcXk1(xk, fxk, flinhaxk);
			calcFXk1(expFunc, xk1);
			writeContent();
		}while(Math.abs(fxk1) > erro);

    	myPlot = new Fooplot(document.getElementById('plotRaphson'));
		myPlot.addPlot(expFunc,FOOPLOT_TYPE_FUNCTION, {'color':'#000'});
		myPlot.reDraw();
			
	});

});