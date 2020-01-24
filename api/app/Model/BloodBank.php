<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BloodBank extends Model
{
    protected $fillable = ['name','address','contact_number','country_id','district_id'];
    protected $table = 'blood_bank';
}
