---
layout: post
title: How We Made "Getting Mean About Error"
date: 2020-07-21 19:55:55 UTC
author: Miles and Michelle # this is just what's used for SEO
authors:
    - fname: Miles
      lname: Kang
    - fname: Michelle
      lname: Zhuang
category: dev
tags:
    - learning labs
    - dev team
---

The [“Getting Mean About Error” module](https://uclaacm.github.io/getting-mean-about-error/) was a two-quarter-long project that we dove into with a negligible background in web development. Along the way, we picked up a few skills and upgraded our web-dev background from beginner to slightly-less-beginner.

The primary aim of this project is to introduce the concept of Mean Squared Error in a beginner-friendly way that can kickstart students’ understanding of machine learning without hurting their heads. We have unbelievably short attention spans ourselves, so we tried to prioritize simplicity while retaining the integrity of the concept, using a larger font, step-by-step animations, and graph examples. We received weekly input from ACM AI and did our best to reflect their ideas and criticisms into our next commit.

Getting into the technical details now, this static web lesson is built off of HTML, CSS, and Javascript, with the help of Bulma for styling and several Javascript libraries to accomplish graphing, math-parsing, and basic animating. These libraries are FunctionPlot (an extension of the popular d3 graphing library), Math.js, MathJax, and anime.js. All of these were very new to us, but we managed to put it all together cleanly with the help of online documentation, our highly intelligent leaders Leo and Matt, and our equally intelligent friend Arjun from ACM AI Outreach.

Most of the obstacles we faced came from the limitations of the libraries we were using, most notably FunctionPlot, our graphing library. Looking back, we definitely could have considered other graphing libraries; it was an oversight on our part not to spend enough time thinking about what functionalities we would want from our graphing library. For example, having the points on the graph labeled with their coordinates would have been very helpful, but is not possible (as far as we can tell) using FunctionPlot. The big selling point of FunctionPlot is its extreme precision, but for our purposes, it could have been worth sacrificing anyway.
