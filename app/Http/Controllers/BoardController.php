<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Board $board)
    {
        $allBoards = $board->whereIn('user_id', $request->user())->with('user');
		$boards = $allBoards->orderBy('created_at', 'desc')->get();
        return response()->json([
            'boards' => $boards
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
        $board = $request->user()->boards()->create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json($board->with('user')->find($board->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function show(Board $board)
    {
        return response()->json([
            'board' => $board
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function edit(Board $board)
    {
        return response()->json([
            'board' => $board
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Board $board)
    {
        $input = $request->all();
        $board->update($input);
        return resopnse()->json($board->with('user')->find($board->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Board $board)
    {
        $board->delete();
    }
}
