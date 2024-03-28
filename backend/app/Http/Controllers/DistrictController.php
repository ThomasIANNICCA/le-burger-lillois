<?php

namespace App\Http\Controllers;

use App\Models\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{

    public function list(){
        $list = District::all();

        if (!empty($list)) {
        // Return JSON of this list
            return response()->json($list, 200);
        } else { // Sinon
            // HTTP status code 404 Not Found
            return response('', 404);
        }
    }

    public function show($id){
        $district = District::find($id);

        return $district;

    }

}
