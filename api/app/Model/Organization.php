<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable=['name','admin_name','admin_contact','district_id'];
}
