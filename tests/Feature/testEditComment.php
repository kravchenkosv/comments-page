<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Comment;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class testEditComment extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {

         $firstComment = factory(Comment::class)->create();
         $secondComment = factory(Comment::class)->make();
         $response = $this->json('PATCH', '/edit', ['id' => $firstComment->id, 'prnt_id' => 0, 'comment' => $secondComment->comment ]);

         $response
              ->assertStatus(200);
    }
}
