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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('notices', 'NoticeController');
Route::resource('boards', 'BoardController');
Route::resource('boards.boardComments', 'BoardCommentController');
Route::resource('posts', 'PostController');
Route::resource('posts.postComments', 'PostCommentController');
