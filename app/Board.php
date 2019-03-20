<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\BoardComment;

class Board extends Model
{
    protected $fillable = ['title', 'description'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function boardComments(){
        return $this->hasMany(BoardComment::class);
    }
}
