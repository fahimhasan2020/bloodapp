<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ReadyDonor extends Model
{
    protected $fillable= ['name','contact','address','referrer_name','referrer_contact','blood_group','donate_date'];
}
