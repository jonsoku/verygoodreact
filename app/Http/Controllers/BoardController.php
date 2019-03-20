<?php

namespace App\Http\Controllers;

use App\Board;
use App\BoardComment;
use App\User;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $boards = Board::with('user')->with('boardComments')->latest()->get();
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
    public function store(Request $request, Board $board)
    {


        $this->validate($request, [
            'title' => 'required | max:255',
            'description' => 'required | max:255',
        ]);
        $board = $request->user()->boards()->create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json([
            'board' => $board,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function show(Board $board)
    {
        $user = $board->user;

        $boardComments = $board->boardComments()->with('user')->latest()->get();

        return response()->json([
            'board' => $board,
            'boardComments' => $boardComments,
            'user' => $user
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
