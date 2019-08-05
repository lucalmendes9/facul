@extends('layouts.app')

@section('content')

	<div class="container mclaurin">
    	<div class="row justify-content-center">
			<div class="bloco">
	            <div class="col-sm-4 campos">
	                <label for="funcao">Função f(x):</label>
	                <input type="text" id="funcao" placeholder="Digite a função..." >
	            </div>
	            <div class="col-sm-4 campos">
	                <label for="intervalo">Grau:</label>
	                <input type="text" id="grau" placeholder="Até o grau..." >
	            </div>
	            <div class="col-sm-3 btns">
	                <a href="#" id="calcular">Calcular</a>
	                <a href="javascript:window.location.reload(true)" id="reset">Reset</a>
	            </div>
	        </div>

			<div class="row rodadas">
			</div>
			<div class="row resultado">
				
			</div>
    	</div>

		<div id="plotMclaurin" style="width:100%;height:400px;"></div>

    </div>

@endsection