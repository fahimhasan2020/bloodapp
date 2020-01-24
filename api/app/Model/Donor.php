<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    protected $fillable = ['name','contact_number','blood_group','counter_id','district_id','city_id','organization_id','last_date'];
}
