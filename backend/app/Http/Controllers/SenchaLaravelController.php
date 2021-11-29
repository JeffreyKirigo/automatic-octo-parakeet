<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SenchaLaravel;

class SenchaLaravelController extends Controller
{
    //Add data / Save Data
    function AddData(Request $request){
        $user = new SenchaLaravel;
        $user ->id = $request -> id;
        $user ->name = $request -> name;
        $user ->Company = $request -> company;
        $user ->Age = $request -> age;
        $user->save();
        redirect()->back();

    }

    //Read data from Database
    function Read(){
        echo 'Hello World';
        die();
        $data = SenchaLaravel::all();
        dd($data);
        return redirect()->back();
    }
    function Update(Request $request){
        $user =SenchaLaravel::find($request->id);
        $user ->id = $request -> id;
        $user ->name = $request -> name;
        $user ->Company = $request -> company;
        $user ->Age = $request -> age;
        $user->save();
        redirect()->back();
    }

    function Delete($id){
        $data = SenchaLaravel::find($id);
        $data->delete();
        return redirect()->back();
    }


}
