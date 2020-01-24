<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BloodRequest extends Model
{
    protected $fillable = ['name','contact','address','time','group'];
    protected $table = 'blood_requests';
}
