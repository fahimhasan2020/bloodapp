<?php

namespace App\Http\Controllers;

use App\Model\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Auth;

class AdminController extends Controller
{
    public function login(){
        return view('admin.auth.login');
    }
    public function postLogin(Request $request){
        $credentials = $request->only('email', 'password');
        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->intended('admin/home');
        }else{
            return redirect()->route('admin-login');
        }
    }
    public function register(){
        return view('admin.auth.register');
    }
    public function postRegister(Request $request){
        $admin = Admin::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        return redirect()->back();
    }

    public function privacyPolicy(){
        return view('admin.auth.privacy');
    }
}
