<?php

namespace App\Http\Controllers;

use App\Comment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function show(Comment $comment)
    {
        return response()->json($comment->all());
    }

    public function store(Request $request)
    {
         $comment = new Comment();
         $comment->comment = $request->comment;
         $comment->prnt_id = $request->prnt_id;
         $save = $comment->save();

         return response()->json($save);
    }

    public function delete(Request $request)
    {
         $num = $request->id;
         $this->deleteComments($num);
         $delete = Comment::find($num)->delete();

         return response()->json($delete);
    }

    public function edit(Request $request)
    {
        $comment = Comment::find($request->id);
        $comment->comment = $request->comment;
        $comment->prnt_id = $request->prnt_id;
        $update = $comment->update();

        return response()->json($update);
    }

    public function deleteComments($num)
    {
         $comments = Comment::where('prnt_id', '=', $num)->first();

         if(isset($comments))
         {
              $id = $comments->id;
              $comments->delete();
              $this->deleteComments($id);
         }

         $comments = Comment::where('prnt_id', '=', $num)->first();

         if(isset($comments))
         {
              $this->deleteComments($num);
         }

         return true;
    }
}
