<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\PostComment;

class Post extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function postComments(){
        return $this->hasMany(PostComment::class);
    }
}
