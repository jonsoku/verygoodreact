<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notice;
use App\Board;
use App\BoardComment;
use App\Post;
use App\PostComment;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function notices(){
        return $this->hasMany(Notice::class);
    }

    public function boards(){
        return $this->hasMany(Board::class);
    }

    public function boardComments(){
        return $this->hasMany(BoardComment::class);
    }

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function postComments(){
        return $this->hasMany(PostComment::class);
    }
}
