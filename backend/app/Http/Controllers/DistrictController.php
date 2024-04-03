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

    public function getRestaurantbyDistrictId($id)
    {
        // Get item or send 404 response if not
        $item = District::find($id);
        // Si on a un résultat
        if (!empty($item)) {

            $restaurants = $item->restaurants;

            // Return JSON of this list
            return response()->json($restaurants, 200);
        } else { // Sinon
            // HTTP status code 404 Not Found
            return response('', 404);
        }
    }
}
