---
layout: post
title:  "Bootcamp Week 1"
date:   2017-05-26 09:21:20 -0400
categories: Awesome Inc S17
---
# What I learned this week

<p>This week has been a crash-course for me in the use of Github and the Sublime text editor. I had a basic understanding of HTML/CSS, but I've learned a lot about building websites. Starting to use the inspect feature on sites really helps show you all the elements of a page and how to change them/what the changes do. Maybe that's something everyone knows already, but I didn't and this is my blog. Deal with it.</p>

<br />

# Why I joined a web developer bootcamp

<p>Everyone who gets into coding and web development has a unique background. Some people get computer science or technical degrees, others work in graphic design and want to learn new programs and languages. A few of them get business degrees, find jobs wherever they can during a recession, and bounce around the banking/tech/medical industries in their post-grad life struggling to find a niche. Then they all quit their mind-numbing government jobs to pursue a highly-coveted skill. Or maybe it's just me blazing that trail.</p>

<br />

# Something technical

<p>Not gonna act like I'm some computer wiz, but I was able to get a pretty cool feature to work on my site. After learning some about Bootstrap (yes, all the programs you have to install have weird names, just accept it bc there are a ton of them), I had 6 different images and was able to put them all together on a rotating carousel. You do it like this:</p>

<br />

Add to html within your "head" tag

<br /> 
 
 <code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"&gt;</code>

<br />
 

Add a div tag like this: 

<br />

<code>&lt;<div id="myCarousel" class="carousel slide" data-ride="carousel">&gt;</code>

<br />

Put this with however many images you have, starting with the first image as "0"

 <code>&lt;<ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>&gt;</code>

<br />

<p>Then, there is a bunch of div tags. Don't let it intimidate you, they are just individual classes for your images and captions you want for them. Use the "item active" tag for the first one, class="item" for subsequent images. The "p" tag is where you can add the captions you want. The only difference between "h3" and what's in the "p" tag is the size and location of the text. Paste the URL or file location of each of your images where it says "img src="</p>

<br />

   <code>&lt;<div class="carousel-inner">
      <div class="item active">
        <img src="discgolfpic.jpg" alt="">
        <div class="carousel-caption">
          <h3>Caption for Image</h3>
          <p>additional info</p>
        </div>
    </div>
    </div>&gt;</code>

<br />
 
<p>To style your carousel, call them in your css file with a .carousel img or .carousel-caption. I've played with the height, padding, text color. That's where I am now, will update as I learn more :)</p>

<!-- You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
 -->