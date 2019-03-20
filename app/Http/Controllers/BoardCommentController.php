<?php

namespace App\Http\Controllers;

use App\BoardComment;
use App\Board;
use Illuminate\Http\Request;

class BoardCommentController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request, Board $board)
    {
        $user = $request->user();

        $boardComment = $user->boardComments()->create(array_merge(
            $request->all(),
            ['board_id' => $board->id]
        ));


        return redirect(route('boards.show', $board->id));
    }

    public function show(BoardComment $boardComment)
    {
        //
    }

    public function edit(BoardComment $boardComment)
    {
        //
    }

    public function update(Request $request, BoardComment $boardComment)
    {
        //
    }

    public function destroy(BoardComment $boardComment)
    {
        $boardComment->delete();
    }
}
