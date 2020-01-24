<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Coordinator extends Model
{
    protected $fillable = ['name','contact_number','type','district_id'];
}
