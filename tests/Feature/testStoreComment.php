<?php

namespace Tests\Feature;

use App\Comment;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class testStoreComment extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
         $firstComment = factory(Comment::class)->make();

         $response = $this->json('POST', '/store', ['comment' => $firstComment->comment, 'prnt_id' => 0]);

         $response
              ->assertStatus(200);
    }
}
