<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Comment;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class testDeleteComment extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
         $firstComment = factory(Comment::class)->create();
         $response = $this->json('DELETE', '/delete', ['id' => $firstComment->id ]);

         $response
              ->assertStatus(200);
    }
}
