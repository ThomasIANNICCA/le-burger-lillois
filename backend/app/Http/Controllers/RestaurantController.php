<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    /**
     * /reviews
     * GET
     */
    public function list()
    {
        // Get all items
        $list = Restaurant::all();

        // Return JSON of this list
        return response()->json($list, 200);
    }

    public function show($id){
        $list = Restaurant::find($id);

            return response()->json($list, 200);
    }


}
