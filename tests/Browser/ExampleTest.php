<?php

namespace Tests\Browser;

use App\Comment;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
         $firstComment = factory(Comment::class)->create();
         $secondComment = factory(Comment::class)->create();
         $this->browse(function (Browser $browser) use ($firstComment, $secondComment) {
              $browser->visit('/')
                   ->pause(1000)
                   ->waitForText('#'.$firstComment->id)
                   ->waitForText($firstComment->comment)
                   ->waitForText('#'.$secondComment->id)
                   ->waitForText($secondComment->comment);
         });
    }
}
