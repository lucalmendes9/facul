@extends('layouts.app')

@section('content')
<div class="container raphson">
    <div class="row justify-content-center">
        <div class="bloco">
            <div class="col-sm-3 campos">
                <label for="funcao">Função f(x):</label>
                <input type="text" id="funcao" placeholder="Digite a função..." >
            </div>
            <div class="col-sm-3 campos">
                <label for="intervalo">Intervalo:</label>
                <input type="text" id="intervalo_de" placeholder="De..." >
                <input type="text" id="intervalo_ate" placeholder="Até..." >
            </div>
            <div class="col-sm-3 campos">
                <label for="erro">Erro:</label>
                <input type="text" id="erro" value="0.005" placeholder="Erro menor que..." >
            </div>
            <div class="col-sm-2 btns">
                <a href="#" id="calcular">Calcular</a>
                <a href="javascript:window.location.reload(true)" id="reset">Reset</a>
            </div>
            <div class="col-sm-6 campos resultDerivate">
                <label for="funcao">f'(x) (Derivada):<br><span>-</span></label>
            </div>
        </div>
    </div>
    <div class="row tentativas">
            <div class="col-sm-2"><h4>Xk</h4></div>
            <div class="col-sm-2"><h4>F(Xk)</h4></div>
            <div class="col-sm-2"><h4>F'(Xk)</h4></div>
            <div class="col-sm-2"><h4>Xk+1</h4></div>
            <div class="col-sm-2"><h4>F(Xk+1)</h4></div>
            <div class="col-sm-2"><h4>|F(Xk+1)| < E</h4></div>
    </div>
    <div id="plotRaphson" style="width:100%;height:400px;"></div>

</div>
@endsection
