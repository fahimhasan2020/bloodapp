<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('blood/bank','ApiController@bloodBank');
Route::post('blood/bank','ApiController@postBloodBank');
Route::get('donors','ApiController@donors');
Route::post('donors','ApiController@postDonors');
Route::get('ready/donors','ApiController@readyDonor');
Route::post('ready/donors','ApiController@postReadyDonor');
Route::get('organizations','ApiController@organizations');
Route::post('organizations','ApiController@postOrganizations');

/*registration*/
Route::post('provider/register','ApiController@apiRegister');
Route::post('/findmail', 'ApiController@findMail')->name('find_mail');
Route::post('provider/edit','ApiController@apiEdit');
Route::get('country','ApiController@country');
Route::get('zilla','ApiController@zilla');
Route::get('zilla/{id}','ApiController@zillaCountry');
Route::get('upazilla','ApiController@upazilla');
Route::get('organizations','ApiController@organizations');
Route::get('coordinators','ApiController@coordinators');
Route::get('coordinators/central','ApiController@coordinatorsCentral');
Route::get('coordinators/district','ApiController@coordinatorsDistrict');
Route::get('blood','ApiController@blood');
Route::post('blood','ApiController@bloodPost');
Route::get('search/{group}/{cid}/{did}','ApiController@search');
