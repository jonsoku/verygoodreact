<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Board;
use App\User;

class BoardComment extends Model
{
    protected $guarded = [];

    public function board(){
        return $this->belongsTo(Board::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
