<?php

namespace App\Http\Controllers;

use App\Model\Admin;
use App\Model\BloodRequest;
use App\Model\Coordinator;
use App\Model\Country;
use App\Model\ReadyDonor;
use App\Model\Upazilla;
use App\Model\Zilla;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DataTables;
use DB;
use Illuminate\Support\Facades\Hash;

class AdminHomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('admin.home');
    }
    public function logout(){
        Auth::logout();
        return redirect()->route('admin-login');
    }
    public function postRegister(Request $request){
        $admin = Admin::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        return redirect()->back();
    }
    public function admins(){ return view('admin.admins');}
    public function users(){return view('admin.users');}
    public function country(){return view('admin.country');}
    public function postCountry(Request $request){Country::create(['name'=>$request->name]); return redirect()->back();}
    public function zilla(){$country = Country::all(); return view('admin.zilla',compact('country'));}
    public function postZilla(Request $request){Zilla::create(['country_id'=>$request->country_id,'name'=>$request->name]);return redirect()->back();}
    public function upazilla(){$zilla = Zilla::all(); return view('admin.upazilla',compact('zilla'));}
    public function postUpazilla(Request $request){
        Upazilla::create([
            'name'=>$request->name,
            'district_id'=>$request->zilla_id
        ]);
        return redirect()->back();
    }
    public function donors(){return view('admin.donors');}
    public function readydonors(){return view('admin.readydonors');}
    public function coordinators(){$zillas = Zilla::all();return view('admin.coordinators',compact('zillas'));}
    public function postCoordinators(Request $request){Coordinator::create(['name'=>$request->name,'contact_number'=>$request->contact_number,'district_id'=>$request->district_id,'type'=>$request->type]);return redirect()->back();}
    public function organization(){return view('admin.organization');}
    public function bloodBank(){return view('admin.bloodbank');}
    public function bloodRequest(){return view('admin.bloodrequest');}
    public function postBloodRequest(Request $request){BloodRequest::create([
        'name'=>$request->name,
        'contact'=>$request->contact,
        'address'=>$request->address,
        'time'=>$request->time,
        'group'=>$request->group
    ]); return redirect()->back();}
    public function adminFetch(){
        $users = Admin::all();
        return Datatables::of($users)->make();
    }
    public function countryFetch(){
        $users = Country::all();
        return Datatables::of($users)->make();
    }
    public function zillaFetch(){
        $users = DB::table('zillas')
            ->join('countries', 'countries.id', '=', 'zillas.country_id')
            ->select('zillas.id AS zid','countries.name AS cname','zillas.name AS zname')->get();

        return Datatables::of($users)->make();
    }
    public function userFetch(){
        $users = User::all();

        return Datatables::of($users)->make();
    }
    public function usersDelete($id){
        $users = User::find($id);
        $users->delete();
        return redirect()->back();
    }
    public function upazillaFetch(){
        $users = DB::table('upazillas')
            ->join('zillas', 'zillas.id', '=', 'upazillas.district_id')
            ->select('upazillas.id AS uid','zillas.name AS zname','upazillas.name AS uname')->get();

        return Datatables::of($users)->make();
    }

    public function donorsFetch(){
        $users = DB::table('donors')
            ->leftJoin('countries', 'countries.id', '=', 'donors.counter_id')
            ->leftJoin('zillas', 'zillas.id', '=', 'donors.district_id')
            ->leftJoin('upazillas', 'upazillas.id', '=', 'donors.city_id')
            ->leftJoin('organizations', 'organizations.id', '=', 'donors.organization_id')
            ->select('donors.*','donors.id AS did','donors.name AS dname','organizations.name AS oname','countries.name AS cname','zillas.name AS zname','upazillas.name AS uname')->get();

        return Datatables::of($users)->make();
    }

    public function readyDonorsFetch(){
        $users = ReadyDonor::all();
        return Datatables::of($users)->make();
    }

    public function coordinatorsFetch(){
        $users = DB::table('coordinators')
            ->leftJoin('zillas', 'zillas.id', '=', 'coordinators.district_id')
            ->select('coordinators.*','coordinators.id AS cid','coordinators.name AS cname','zillas.name AS zname')->get();
        return Datatables::of($users)->make();
    }

    public function organizationFetch(){
        $users = DB::table('organizations')
            ->leftJoin('zillas', 'zillas.id', '=', 'organizations.district_id')
            ->select('organizations.*','organizations.id AS oid','organizations.name AS oname','zillas.name AS zname')->get();
        return Datatables::of($users)->make();
    }

    public function bloodBankFetch(){
        $users = DB::table('blood_bank')
            ->leftJoin('zillas', 'zillas.id', '=', 'blood_bank.district_id')
            ->leftJoin('countries', 'countries.id', '=', 'blood_bank.country_id')
            ->select('blood_bank.*','blood_bank.id AS bid','blood_bank.name AS bname','countries.name AS cname','zillas.name AS zname')->get();
        return Datatables::of($users)->make();
    }

    public function bloodRequestFetch(){
        $users = BloodRequest::all();
        return Datatables::of($users)->make();
    }
}
