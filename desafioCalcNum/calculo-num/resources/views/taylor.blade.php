@extends('layouts.app')

@section('content')

	<div class="container taylor">
    	<div class="row justify-content-center">
			<div class="bloco">
	            <div class="col-sm-3 campos">
	                <label for="funcao">Função f(x):</label>
	                <input type="text" id="funcao" value="sin(x)" placeholder="Digite a função..." >
	            </div>
	            <div class="col-sm-3 campos">
	                <label for="intervalo">Grau:</label>
	                <input type="text" id="grau" value="5" placeholder="Até o grau..." >
	            </div>
	            <div class="col-sm-3 campos">
	                <label for="intervalo">Valor de x (a):</label>
	                <input type="text" id="valorA" value="2" placeholder="Digite o valor de x(a)..." >
	            </div>
	            <div class="col-sm-2 btns">
	                <a href="#" id="calcular">Calcular</a>
	                <a href="#" id="reset">Reset</a>
	            </div>
	        </div>

			<div class="row rodadas"></div>
			
			<div class="row resultado"></div>
    	</div>

		<div id="plotTaylor" style="width:100%;height:400px;"></div>

    </div>

@endsection