---
layout: post
title: Welcome to Our Blog!
author: Matt and Leo # this is just what's used for SEO
authors:
    - fname: Matthew
      lname: Wang
    - fname: Leo
      lname: Krashanoff
category: dev
tags:
    - website
---

Hey there! This is Matt and Leo, Teach LA's current president and dev team director respectively. We've always wanted to make the inner workings of Teach LA more transparent: what goes on at our meetings, what do we learn from teaching, and what does our dev team even do?

To solve that problem (and many more), we present to you the **Teach LA blog!** This isn't a brand-new idea - ACM actually used to have a blog in the past - but inspired by the transparency in the [ACM AI Outreach Blog](https://uclaacmai.github.io/blog/) and the complete shift to virtual education, we felt like this was the next step that our committee should take.

So, what's going to be on this blog? We want to document as much of what we do as possible: not only to satisfy your curiosity, but also to promote internal and external transparency (something that we're doing in conjunction with our [reports section]({{site.baseurl}}/reports/)), and to document everything we've done. Expect cool things like:

* meeting members in our wonderful club
* insights and reflections on our dev team projects
* pedagogy micro-lessons and new teaching methods that we try
* informal reflections on our quarter, our year, and our programs

Implementing the blog feature seems pretty simple, but we actually had to deal with quite a few quirks! As you may know, our site is implemented with [Jekyll](https://jekyllrb.com), a static site generator that calls itself *blog-aware*. It has first-class support for simple blog-related code: auto-generating posts, date/time generation & sorting, and metadata-based URLs all come out of the box. However, to implement some of the more complex features, such as the [authors feature](#authors) that you see below, we had to do a bit of digging into the [Liquid templating language](https://shopify.github.io/liquid/) and [rewrite our entire internal team codebase](https://github.com/uclaacm/teach-la-website/pull/78)! Huge thanks to Leo for being able to figure all of that out, we couldn't have done it without him.

Anyways, that's it for now. We're excited for this blog to come to life - hopefully you are too!
