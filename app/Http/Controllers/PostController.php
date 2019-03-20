<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->with('postComments')->latest()->get();

        return response()->json([
            'posts' => $posts
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required | max:255',
            'description' => 'required | max:255',
        ]);
        $post = $request->user()->posts()->create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json($post->with('user')->find($post->id));
    }

    public function show(Post $post)
    {
        $user = $post->user;
        $postComments = $post->postComments()->with('user')->latest()->get();

        return response()->json([
            'post' => $post,
            'user' => $user,
            'postComments' => $postComments
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $input = $request->all();
        $post->update($input);
    }

    public function destroy(Post $post)
    {
        $post->delete();
    }
}
