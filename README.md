HowToBookmarklet
================

Lesson for DevMountain

##Resources

* http://www.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/

* jQuery Documentation


##What is a Bookmarklet?

A bookmarklet is javascript written in link form that you can run on other people's websites.

The script is written in a link that people can add to their toolbar, just like any normal website link.

##History



##Use Cases

* Improve activity or functionality for a user.

* Scrape information off a website. (Like a recipe!)

* " . . ."one-click" tools and functions . . . used to extend the functionality of the browser and to interact with Web services."

* Post to a blog.

* "Pin" something from another website.

* " . . . submit any selected text to Google Search"

* " . . . modify a current page's CSS"

* Whatever else you can imagine.


##Guided Practice

* In the browser open the index.html file in this repo.
* Drag the bookmarklet to your toolbar and click it!
* That's kind of . . . boring.
* Go to a different page and click it!  It's running on someone elses page! But it's kind of boring.

* Go in the index.html and let's change the code we are running.


* Now let's look at the actual bookmarklet by using our 'right click' to pull up the options and 'Edit'.
* The javascript is in the place where we would normally have the url.


At this point you could write whatever you need write here in the bookmark url.  However, everything has to all to be in one line.  And you got to make sure that the stuff inside is in single '' rather than double "".  And if you are writing anything much longer then you are going to need a longer script.

For ease of coding and maintaining, we are going to make our bookmarklet url a javascript "link" to our main script where we can write the functionality.

```
/*Put the codes here*/
```

This script uses basic javascript to append the script tag and source to the body.  But, that script has to be online somewhere, so I have spun up a simple server.





```
var document = function(){};
```

That's cool!

##Traversing the DOM


##Other Resources for Problem Solving

* http://stackoverflow.com/questions/18565560/how-to-dynamically-change-bookmarklet-parameters-using-angular