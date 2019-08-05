<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', ['middleware' => 'auth', function() {
    return view('welcome');
}]);
Route::get('/home', ['middleware' => 'auth', function() {
    return view('welcome');
}]);
Route::get('/newton-raphson', 'NewtonRaphsonController@index')->name('newtonRaphson');
Route::get('/serie-de-maclaurin', 'MclaurinController@index')->name('mclaurin');
// Route::get('/serie-de-taylor', 'TaylorController@index')->name('taylor');
