<?php

namespace App\Http\Controllers;

use App\Model\BloodBank;
use App\Model\BloodRequest;
use App\Model\Coordinator;
use App\Model\Country;
use App\Model\Donor;
use App\Model\Organization;
use App\Model\ReadyDonor;
use App\Model\Upazilla;
use App\Model\Zilla;
use App\User;
use Illuminate\Http\Request;
use DB;

class ApiController extends Controller
{
    public function bloodBank(){
        $bloodBank = BloodBank::all();
        return $bloodBank->toJson();
    }
    public function postBloodBank(Request $request){
        BloodBank::create([
            'name'=>$request->name,
            'address'=>$request->address,
            'contact_number'=>$request->contact_number,
            'country_id'=>$request->country,
            'district_id'=>$request->zilla,
        ]);
    }
    public function donors(){$country = Donor::all(); return $country->toJson();}
    public function postDonors(Request $request){Donor::create(['name'=>$request->name,'contact_number'=>$request->contact_number, 'blood_group'=>$request->blood_group,'counter_id'=>$request->countries,'district_id'=>$request->zilla,'organization_id'=>$request->organization]);}
    public function readyDonor(){$country = ReadyDonor::all(); return $country->toJson();}
    public function postReadyDonor(Request $request){ReadyDonor::create(['name'=>$request->name,'contact'=>$request->contact,'address'=>$request->address,'referrer_name'=>$request->referrer_name,'referrer_contact'=>$request->referrer_contact,'blood_group'=>$request->blood_group,'donate_date'=>$request->donate_date]);}
    public function organizations(){$country = Organization::all(); return response()->json($country);}
    public function postOrganizations(Request $request){Organization::create(['name'=>$request->name,'admin_name'=>$request->admin_name,'admin_contact'=>$request->admin_contact,'district_id'=>$request->district_id]);}
    public function country(){$country = Country::all(); return $country->toJson();}
    public function zilla(){$country = Zilla::all(); return $country->toJson();}
    public function zillaCountry($id){$country = Zilla::where('country_id',$id)->get(); return $country->toJson();}
    public function upazilla(){$country = Upazilla::all(); return $country->toJson();}
    public function coordinators(){$country = Coordinator::all(); return $country->toJson();}
    public function coordinatorsCentral(){$country = Coordinator::where('type','normal')->get(); return $country->toJson();}
    public function coordinatorsDistrict(){$country = Zilla::all(); return $country->toJson();}
    public function blood(){$country = BloodRequest::all(); return $country->toJson();}
    public function bloodPost(Request $request){
        BloodRequest::create(['name'=>$request->name,'contact'=>$request->contact,'address'=>$request->address,'group'=>$request->group,'time'=>$request->time]);
    }
    public function findMail(Request $request){
        $user = User::where('email',$request->email)->get();
        if (count($user) > 0){
            return 1;
        }else{
            return 0;
        }
    }
    public function apiRegister(Request $request){
        $validateData = $request->validate([
            'name' => 'required|max:55',
            'email'=> 'required|unique:users',
            'password'=>'required|confirmed'
        ]);
        $validateData['password'] = bcrypt($request->password);
        $providers = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$validateData['password'],
            'blood_group'=>$request->group,
            'organization'=>(int)$request->organization,
            'country'=>(int)$request->country,
            'zilla'=>(int)$request->zilla
        ]);
        return response(['user'=>$providers]);
    }

    public function apiEdit(Request $request){

    }

    public function search($group,$cid,$did){
       $donors =  DB::table('donors')
           ->join('countries', 'donors.counter_id', '=', 'countries.id')
           ->join('zillas', 'donors.district_id', '=', 'zillas.id')
           ->select('donors.*','countries.name AS cname','zillas.name AS zname')
           ->when($group,function ($query,$group){
                    return $query->where('blood_group',$group);
            })
            ->get();
       return $donors->toJson();
    }

}
