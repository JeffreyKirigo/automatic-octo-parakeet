<?php

namespace App\Http\Controllers;

use App\Models\Personnel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PersonnelController extends Controller
{
        //Create/insert Data into db
        function addData(Request $request){
            $data = new Personnel;
            $data->user_name = $request->user_name;
            $data->age = $request->age;
            $data->company = $request->company;
            $data->gender = $request->gender;
            $data->save();
            return redirect('personnel');
        }

        //Read/Get data from db
        function fetchData (){

            return Personnel::all();
        }

        //Update/change data in db
        function update(Request $request){
            $data=Personnel::find($request->id);
            $data->user_name = $request->user_name;
            $data->age = $request->age;
            $data->company = $request->company;
            $data->gender = $request->gender;
            $data->save();
            return redirect('personnel');

        }

        //Delete data from db
        function delete(Request $request){
            $id = $request->id;
            $data=Personnel::find($id);
            $data->delete();

        }
}
