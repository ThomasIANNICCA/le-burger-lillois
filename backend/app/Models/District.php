<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public function restaurants()
    {
        return $this->hasMany(Restaurant::class, 'districts_id');
    }
}
