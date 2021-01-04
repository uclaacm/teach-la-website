---
layout: post
title: Introducing Our New Curriculum Pages!
date: 2021-01-03 17:00:00 PST
author: Einar, Jun, Alex, and Prateek
authors:
    - fname: Einar
      lname: Balan
    - fname: Jun
      lname: Ma
    - fname: Alex
      lname: Pun
    - fname: Prateek
      lname: Sane
category: dev
tags:
    - curriculum
    - dev team
image: img/posts/new_curriculum_2021/curr-icons.png
alt: Showing off our icons for each class page!
---

Our [Classes & Curriculum](https://teachla.uclaacm.com/classes) page hosts content dedicated to all of our classes, from our introductory Python course to our mobile/web app development courses. As stated on the page, having a place where anyone can access material from our classes is integral to Teach La's mission. It's our hope that by making our classes as accessible as possible, we can begin to reach an even wider audience and, hopefully, a more diverse demographic!

Prior to Winter 2021, however, most of the content was hosted on third party sites such as Google Docs or Github, which was not an ideal solution. The end goal was to host all class content directly on the website, and potentially make it more interactive by adding problems that check for understanding. We're proud to say that, although there is still much room for improvement, we are very close to accomplishing this mission! We have now implemented both the [Python](https://teachla.uclaacm.com/classes/py1) and [React Native](https://teachla.uclaacm.com/classes/rnative) curriculum pages in addition to the [Intro AI](https://teachla.uclaacm.com/classes/ml) class that was already finished. In this blog post we'll be covering how we decided to implement each section, the challenges we faced during development, and our ideas on how to streamline development of new curriculum pages in the future. 

## Python Curriculum Page

This page was implemented by Einar and Jun, with Jun working on implementing the curriculum page itself and Einar working on the lesson pages' design and implementation. We both came into this project with relatively little web development knowledge, so it was a great learning experience for us!

### Features

Before even getting started implementing anything, we knew we had to plan out exactly what we wanted to feature on the page and decide ahead of time what the best way to present it would be. Luckily, the [design](https://www.figma.com/file/1DtxLV71aK4NKKIg0MpxbI/Learning-Pathways-Draft?node-id=0%3A1) of the Python curriculum page had been completed a few weeks prior, so there was already a great guide for us to follow! Based on the design, we initially decided we wanted the following in the curriculum page:
- section organization
- lesson titles, agendas, and lengths
- clear links to slides, videos, and worksheets
- assignments at the end of each section

Some specific features of the design, like sectioning and projects, are not yet implemented as of the writing of this blog post, but they will be in the coming weeks! Check out [this](https://github.com/uclaacm/teach-la-website/issues/198) GitHub issue if you're interested in seeing our future plans.

On the other hand, the design of each lesson page was up to us to figure out. One option was to simply follow the same template as the preexisting AI/ML lesson pages. However, we decided not to do this for two reasons: we knew there would be a lot more content to show on the Python lesson pages than on the AI/Ml pages since our Python curriculum is far more developed, and we wanted to improve the interactivity of the page by providing practice problems extending beyond worksheets. So we decided to create a new [design](https://www.figma.com/file/Mu6CcdWCAI1RVG9mEiJwdI/Teach-La-Python-Lesson-Page). We kept the following features in mind during the design process:
- lesson name, description, and agenda
- links to slides and worksheets
- lesson length
- links to go back to the curriculum page or to the next lesson
- a video from the python video team (aka the coolest team at Teach LA)
- practice problems complete with solutions

We kept all of these features in mind while designing the Jekyll collection for the lesson pages. Speaking of Jekyll...
  
### Technologies
As you may or may not know, the Teach LA website is built using [Jekyll](https://jekyllrb.com/docs/liquid/), a static site creation tool that utilizes Shopify's Liquid templating language. Jekyll is very powerful in that it allows for the creation of Collections. Collections are markdown files that contain all of the data necessary (communicated using YAML) to populate a template, also known as a layout. We also utilized [SASS](https://sass-lang.com/) mixins in order to consolidate our styling and reduce redundancies, which we struggled with early on.
Our collection for the lessons more or less followed our desired list of features. 

Here's a look at it: 

```md
---
title: The name of the lesson
next_lesson: title of next lesson
next_link: link to next lesson
group: the group of the lesson i.e. fundamentals or control flow etc.
num: lesson number indicates recommended order of completion
length: time required to watch video and complete associated problems
agenda: an array of agenda items
assignment: only include if the lesson is an assignment; for now a link to the problem
practice: an array of problems
  - problem
    num: problem number
    question: written in markdown
    solution: written in markdown
--- 
Content: long description of lesson to show on lesson page
```

The Collection went through a couple iterations including a few where we hardcoded a maximum of three practice problems. After some closer consideration, we realized this was unnecessary and removed the arbitrary limit. As mentioned, we were both very new to Jekyll so we had to do a lot of learning to find the best way to implement certain things.

### Challenges

#### Einar

Designing the collection was by far the easiest part. What was really challenging was actually linking it to the layout for the lesson pages that we had created. As an inexperienced Jekyll developer, it just wasn't at all clear how the two could be linked. It honestly seemed like magic how other collection-utilizing pages (such as the team page and AI/ML lesson pages) worked. After a solid 5 hours of documentation reading and searching through the website's large codebase, I finally discovered the elusive `_config.yml` file (insert Hallelujah music here) and successfully linked the data in the collections to the templates. 

But yeah, 5 hours. That's what I get for jumping into a big project like this with no experience. I'm glad I did it, though! It was genuinely a great learning experience and there are a ton of skills that I will be sure to apply to my next project and throughout my career as a developer!

Additionally, I made the mistake of not reading any of Jun's CSS code that he had written for the Python curriculum page (nor any of the website's CSS in general), so I made quite a few duplicate/unnecessary classes. I also realize now that I followed a fairly poor design ideology of styling each component on its own rather than creating more general classes that can be reused anywhere in the site. Oh well, live and learn! We can definitely go back later and refactor some of the bad CSS that I wrote.

#### Jun

Getting started on the project was daunting, so I was really glad when Einar was assigned to work on this with me. We divided up the work early so each of us had a clear focus.

I realized I had poor organization only much later on. Initially, I was ambitious about recreating the design sketch as is, and spent too much time fine-tuning each small element on the page. (Overriding user agent stylesheet rules turned out to be very important to controlling the look of the page.) To that end, I thought I would learn Liquid after I finished all (!) the styling for the page. In my head, the magic script was going to make everything fall into place and generate all the HTML content I need, so if I finished the CSS, the one last step would just complete the whole thing. This was a mistake. If I had focused on the content structure before style – in fact, I thought I did when I wrote some stub HTML by hand to style, but no – I would’ve seen that the design of the elements makes use of much repetition, and much time and frustration could’ve been saved. I decided early when typing out the sample HTML that each lesson card would have three rows: a title, a body, and an action bar. This division remained, but the CSS rules now fortunately look more cohesive than the ones I spent too much time tweaking. Never again shall I miss the forest for the trees!

The big picture aside, everything else was a learning experience. Toward the end, I was able to lay down starter CSS rules by heart much faster (“border – margin – padding – color – text,” I would chant). Letting go of the impulse to recreate the sketch exactly also freed up time to make new decisions. For example, once I let go of the strong wish to stick to the button layout on the sketch when it didn’t adapt well to viewport width changes, I just decided they should be in a column sometimes to avoid taking up too much horizontal space, and I ended up liking this look. It did surprise me most of my learning is psychological and about ‘heart’ decisions rather than just ‘code’ decisions. I found myself thinking a few times “Would the viewer like this?” or “How do I make this look easier on the eyes?” Being new with little experience taking on a big (not so anymore!) project probably caused this anxiety, but all of that has now turned into confidence in tackling the next one.

## React Native Curriculum Page

This page was created by Alex and Prateek. Prateek was in charge of implementing the infrastructure of the course collection, while Alex took care of filling in all of the content and cleaning up the design of the page.

### Features

Programming is often seen as very inaccessible and can be perceived as impossible to learn. With these lessons, we try to make coding more accessible. A really nice class to teach is one to build websites, webapps, or mobile apps. Since everyone uses them on a daily basis, it is a very nice gateway into programming to teach someone how to build their very own version. 

This class is created to help teach students to build their own mobile app through React Native. It includes class lessons with content teaching the fundamentals of computer science, the ideas behind how/why things are done the way they are done, and introductions to HTML, CSS, Javascript, and more, all of which are critical in building apps. 
Within each lesson we can see multiple things. These include github links to the lessons on github or the code referenced within the lesson. These are particularly useful in helping students build off this code, use it as an example, or learn from these samples. All of which could help the student better understand the material behind the lesson. Each lesson also includes some sort of activity for the student to do. The content is also written in a way that provides more of an engaging experience rather than just a manual on how certains things affect others. This makes the learning much more welcoming. 

### Technologies

In each individual lesson page, we wanted to render the accompanying lesson guide from the React Native course GitHub. These guides were written as markdown files, and we had to convert them into raw HTML. We used [Marked](https://marked.js.org/), a 3rd-party markdown compiler to do the job for us. We then sanitized the converted HTML using [DOMPurify](https://github.com/cure53/DOMPurify) to ensure that there wasn’t any malicious code!

Since we used the same design as the AI/ML course pages, we realized that there was a lot of code duplication of the AI/ML course pages, especially with our CSS. In order to clean this all up, we used SASS and its mixin functionality to cut out all of the repeated code. [SASS](https://sass-lang.com/) is a scripting language that gets converted into regular CSS files when we compile our webpage, and it is useful for us because it allows us to use variables in our CSS. We can also use mixins, which give us the ability to pass in arguments into our styles. Much like functions, we can pass in specific variables dynamically so that we can reuse styles that are very similar. In our case, a lot of the styling for the AI/Ml pages and the React Native pages only differed in the specific class color, so mixins were a great tool to cut down on code duplication!

### Challenges

#### Alex

The biggest challenge that I had was dealing with images that were in the lesson guide markdown files. Since these guides were initially written to be read in the GitHub repository, the images were linked with local paths. When we convert the markdown files, the site would read these paths as local to the lesson page, not the original lesson guide page. To fix this, I had to parse the entire markdown for the image paths in the `![]()` tags, and save these paths. I used [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to parse through the file. Now that I had the path of each image, I just appended it to the appropriate GitHub link and inserted them into the markdown file.

#### Prateek

I faced a few challenges when dealing with this project. Primarily, this was the first larger scale project I had worked on. The other things I had done with HTML/CSS/Javascript were much smaller and created by scratch. Orienting myself to the codebase took some time and taught me lessons on how to methodically explore pre existing code to find the material I needed. Furthermore, when coming to the construction of the actual website a tricky portion was some of the css styling. At the time, I was fairly new to css and therefore properly lining up the material and making sure it looked proper was a bit tricky. I had first approached this by trying to rewrite the CSS but this was not effective for two reasons. First, there already were Sass files that existed for the AI/ML pages that I could use similarly. Second, the CSS was fairly intricate so it would be a lot of unnecessary code. Once I realized this, I just adjusted some of the variables such as color and reused the same code.

## Reflection

Looking back on the development of both of these curriculum pages, it's clear that it would be possible to streamline it one significant way. Both teams (Einar and Jun, Prateek and Alex) were basically developing in a vacuum, completely isolated from each other. This is because, as it stands, in order to add a curriculum page a team needs to get together and develop a whole new layout and collection that fits the course’s features. 

We could streamline this by unifying each curriculum page into a single layout and collection. (Note from Einar: I'm fairly new to Jekyll so I'm not entirely sure if this is possible, but if it is, it's definitely something we should consider!) This would make it far easier to add new curriculum pages in the future should we ever start teaching new topics. It may limit the flexibility of the design of each curriculum page, but that may actually do more good than bad. It would essentially force consistency between each curriculum page. However, the individuality of the Python page definitely makes it stand out! (At least Jun thinks so.)

Overall, this was definitely a great experience for all of us. [And although our web dev skills are great, we have a lot to learn before we're ready to create again. But I believe we can make the perfect website.](https://www.youtube.com/watch?v=d1EnW4kn1kg)