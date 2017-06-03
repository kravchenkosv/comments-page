<?php

namespace Tests\Browser;

use App\Comment;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class testEditeAndChangeParentComment extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
         $firstComment = factory(Comment::class)->create();
         $secondComment = factory(Comment::class)->create();
         $thirdComment = factory(Comment::class)->make();

         $this->browse(function (Browser $browser) use($firstComment, $secondComment, $thirdComment) {
              $browser->visit('/')
                   ->waitForText($firstComment->id)
                   ->waitForText($firstComment->comment)
                   ->waitForText($secondComment->id)
                   ->waitForText($secondComment->comment)
                   ->click('button[data-id="'.$secondComment->id.'"].edit')
                   ->pause(1000)
                   ->click('button[data-id="'.$firstComment->id.'"].comment')
                   ->type('#comment', $thirdComment->comment)
                   ->pause(1000)
                   ->press('#submit-btn')
                   ->waitForText('#'.$secondComment->id)
                   ->waitForText($thirdComment->comment)
                   ->pause(1000)
                   ->click('button[data-id="'.$secondComment->id.'"].delete')
                   ->pause(1000)
                   ->click('button[data-id="'.$firstComment->id.'"].comment')
                   ->type('#comment', $secondComment->comment)
                   ->pause(1000)
                   ->press('#submit-btn')
                   ->waitForText($secondComment->comment)
                   ->pause(1000)
                   ->click('button[data-id="'.$firstComment->id.'"].delete');
         });
    }
}
