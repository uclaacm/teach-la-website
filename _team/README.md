## Wow, that's a big team!

All our wonderful team profiles are stored here, and are used to track your past, present and future with Teach LA. To create your own, follow this guide:

```md
---
name: "My Name"
group: "member"
title: "My Position Title"
img: "image_name.png"
email: "Your email (if you're comfortable sharing)"
github: "username (optional)"
links:
  - name: "Other, Custom Link"
    href: "mywebsite.com"
---

## Headers!

Here is a cool blurb I wrote about myself. It supports
complete Markdown formatting, so you can insert links in
paragraphs [like this one](http://example.com) or format
text **to be bold**, *italicized*, or make lists:
1. Number one
2. Number two
* Unordered one
* Unordered two
```

| Field Key | Value | Required? |
|-|-|-|
| `firstname` | Your preferred first name! | ✅ |
| `lastname` | Your last name! | ✅ |
| `group` | Exactly one of the following: "member" (standard) \| "board" (serving the **current** board) \| "alum" (graduated) \| "alum+" (graduated in club, a.k.a. one of our "Graduated Greats") | ✅ |
| `title` | What you do in club | ✅ |
| `graduating_year` | What year you plan to graduate in. If you graduate as a Teach LA member, you will be added to our list of "Graduating Greats!" | ✅ |
| `secondary` | If you do something in addition to your primary role | ❌ |
| `img` | Filename of an image of your face, as located in our [img/team folder](../img/team)! | ❌ (but recommended!) |
| `github` | Your GitHub username | ❌ |
| `email` | Your email address | ❌ |
| `links` | An array of links, each with a `name` and `href` field. | ❌ |
| `positions` | Array of year-ranges and titles for Teach LA boards you served on. New members don't need to worry about this one. | ❌ |

You can also create a body for your page using Markdown! Check out the example above for an idea of how you can make your custom team page.

Once you've created your page, place it into the appropriate folder.

Here are two examples:

## Teach LA Member

A proliferating pedagogy professional. Just getting started, they have added an `img`, `github`, `email` in addition to our required fields. They also got a little creative and added a custom page.

```md
---
firstname: Joe
lastname: Bruin
group: member
title: Instructor
graduating_year: 1923

img: jbruin.png
github: uclaacm
email: joe@ucla.edu
---

Welcome to my Teach LA about page. I am Joe Bruin. I'm just getting started, but excited to see where I'll go with Teach LA!
```

## Teach LA Board Alumni

The fully-evolved Teach LA member: served on multiple boards, is a "Graduating Great", and has a fully fleshed out profile page. Since Josie has graduated while being with Teach LA, she is an `alum+`, and no longer has a title, since her record is preserved in the `positions` field.

```md
---
firstname: Josie
lastname: Bruin
group: alum+
graduating_year: 1923

img: josiebruin.png
github: uclaacm
email: josie@ucla.edu

positions:
  - year: 1920-1921
    title: Instructor
  - year: 1921-1922
    title: Outreach Director
  - year: 1922-1923
    title: President

links:
  - name: My personal website
    href: ucla.edu
---

## Hello, I am Josie Bruin.

I have been with Teach LA for every year of my college experience, and it's been phenomenal!

## My Favorite Classes at UCLA
* ...
```