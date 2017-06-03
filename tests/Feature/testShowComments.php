<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Comment;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class testShowComments extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {

         $firstComment = factory(Comment::class)->create();

         $response = $this->json('POST', '/store', ['comment' => $firstComment->comment, 'prnt_id' => 0]);

         $response
              ->assertStatus(200);
    }
}
