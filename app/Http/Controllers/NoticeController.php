<?php

namespace App\Http\Controllers;

use App\Notice;
use App\User;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Notice $notice)
    {

        $allNotices = $notice->whereIn('user_id', $request->user())->with('user');
		$notices = $allNotices->orderBy('created_at', 'desc')->get();

        return response()->json([
            'notices' => $notices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required | max:255',
            'description' => 'required | max:255',
        ]);
        $notice = $request->user()->notices()->create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json($notice->with('user')->find($notice->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Notice $notice)
    {
        return response()->json([
            'notice' => $notice
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function edit(Notice $notice)
    {
        return response()->json([
            'notice' => $notice
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notice $notice)
    {
        $input = $request->all();
        $notice->update($input);
        return resopnse()->json($notice->with('user')->find($notice->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        $notice->delete();
    }
}
