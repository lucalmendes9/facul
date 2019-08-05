@extends('layouts.app')

@section('content')
        <div class="flex-center_ position-ref full-height">
            @if (Route::has('login'))
                <div class="links">
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                </div>
            @endif

            <div class="content" style="margin-top: 50px;">
                <div class="title m-b-md">
                    Desafio de Cálculo Numérico
                </div>

                <div class="links">
                        <a href="{{ route('newtonRaphson') }}">Newton Raphson</a>
                        <a href="{{ route('mclaurin') }}">Série de MacLaurin</a>
                    <!-- <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a> -->
                </div>
                <br><br>
                <div class="alert alert-info" role="alert">
                  Dicas:<br>
                  Erro não é obrigatório, valor padrão é 0.005, mas pode ser alterado. <br>
                  Usar ponto e não virgula. <br>
                  Exemplo da sintax das funções: e^x-5*x <br>
                  ln(x) se escreve log(x) <br>
                  log(x) se escreve log10(x) <br>
                  sen(x) se escreve sin(x)
                </div>
            </div>
        </div>
@endsection
