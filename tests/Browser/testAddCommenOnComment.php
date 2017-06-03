<?php

namespace Tests\Browser;

use App\Comment;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class testAddCommenOnComment extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
         $firstComment = factory(Comment::class)->make();
         $secondComment = factory(Comment::class)->make();
         $this->browse(function (Browser $browser) use($firstComment, $secondComment) {
              $browser->visit('/')
                   ->type('#comment', $firstComment->comment)
                   ->pause(1000)
                   ->press('#submit-btn')
                   ->waitForText($firstComment->comment)
                   ->pause(1000)
                   ->click('button.comment')
                   ->type('#comment', $secondComment->comment)
                   ->pause(1000)
                   ->press('#submit-btn')
                   ->waitForText($secondComment->comment);
         });
    }
}
