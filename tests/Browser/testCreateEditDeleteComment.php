<?php

namespace Tests\Browser;

use App\Comment;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class testCreateEditDeleteComment extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
         $firstComment = factory(Comment::class)->create();
         $secondComment = factory(Comment::class)->make();
         $this->browse(function (Browser $browser) use($firstComment, $secondComment) {
              $browser->visit('/')
                   ->waitForText($firstComment->id)
                   ->waitForText($firstComment->comment)
                   ->pause(1000)
                   ->click('button[data-id="'.$firstComment->id.'"].edit')
                   ->type('#comment', $secondComment->comment)
                   ->pause(1000)
                   ->press('#submit-btn')
                   ->waitForText('#'.$firstComment->id)
                   ->waitForText($secondComment->comment)
                   ->pause(1000)
                   ->click('button[data-id="'.$firstComment->id.'"].delete');
         });
    }
}
