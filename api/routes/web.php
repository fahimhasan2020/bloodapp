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
Route::get('/admin/login', 'AdminController@login')->name('admin-login');
Route::post('/admin/login', 'AdminController@postLogin')->name('admin-post-login');
Route::post('/admin/register', 'AdminHomeController@postRegister')->name('admin-post-register');
Route::get('/privacy/policy', 'AdminController@privacyPolicy')->name('privacy-policy');

Route::get('/admin/home', 'AdminHomeController@index')->name('admin-home');
Route::get('/admin/admins', 'AdminHomeController@admins')->name('admin-admins');
Route::get('/admin/users', 'AdminHomeController@users')->name('admin-users');
Route::get('/admin/users/delete/{id}', 'AdminHomeController@usersDelete')->name('admin-users-delete');
Route::get('/admin/country', 'AdminHomeController@country')->name('admin-country');
Route::post('/admin/country', 'AdminHomeController@postCountry')->name('admin-post-country');
Route::get('/admin/zilla', 'AdminHomeController@zilla')->name('admin-zilla');
Route::post('/admin/zilla', 'AdminHomeController@postZilla')->name('admin-post-zilla');
Route::get('/admin/upazilla', 'AdminHomeController@upazilla')->name('admin-upazilla');
Route::post('/admin/upazilla', 'AdminHomeController@postUpazilla')->name('admin-post-upazilla');
Route::get('/admin/donors', 'AdminHomeController@donors')->name('admin-donors');
Route::get('/admin/readydonors', 'AdminHomeController@readydonors')->name('admin-readydonors');
Route::get('/admin/coordinators', 'AdminHomeController@coordinators')->name('admin-coordinators');
Route::post('/admin/coordinators', 'AdminHomeController@postCoordinators')->name('admin-post-coordinators');
Route::get('/admin/organization', 'AdminHomeController@organization')->name('admin-organization');
Route::get('/admin/blood-bank', 'AdminHomeController@bloodBank')->name('admin-blood-bank');
Route::get('/admin/blood-request', 'AdminHomeController@bloodRequest')->name('admin-blood-request');
Route::post('/admin/blood-request', 'AdminHomeController@postBloodRequest')->name('admin-post-blood-request');
/*Admin ajax fetch*/
Route::get('/admin/admin-fetch', 'AdminHomeController@adminFetch')->name('admin-fetch');
Route::get('/admin/user-fetch', 'AdminHomeController@userFetch')->name('admin-user-fetch');
Route::get('/admin/country-fetch', 'AdminHomeController@countryFetch')->name('admin-country-fetch');
Route::get('/admin/zilla-fetch', 'AdminHomeController@zillaFetch')->name('admin-zilla-fetch');
Route::get('/admin/upazilla-fetch', 'AdminHomeController@upazillaFetch')->name('admin-upazilla-fetch');
Route::get('/admin/donors-fetch', 'AdminHomeController@donorsFetch')->name('admin-donors-fetch');
Route::get('/admin/ready-donors', 'AdminHomeController@readyDonorsFetch')->name('admin-ready-donors-fetch');
Route::get('/admin/coordinators-fetch', 'AdminHomeController@coordinatorsFetch')->name('admin-coordinators-fetch');
Route::get('/admin/organization-fetch', 'AdminHomeController@organizationFetch')->name('admin-organization-fetch');
Route::get('/admin/blood-bank-fetch', 'AdminHomeController@bloodBankFetch')->name('admin-blood-bank-fetch');
Route::get('/admin/blood-request-fetch', 'AdminHomeController@bloodRequestFetch')->name('admin-blood-request-fetch');

Route::post('/admin/logout', 'AdminHomeController@logout')->name('admin-logout');
