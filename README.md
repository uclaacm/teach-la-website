# Teach LA Website

![GH Pages Production Deploy](https://github.com/uclaacm/teach-la-website/workflows/GH%20Pages%20Production%20Deploy/badge.svg)
![Test Jekyll Build](https://github.com/uclaacm/teach-la-website/workflows/Test%20Jekyll%20Build/badge.svg)
[![Site Up Status](https://img.shields.io/website?url=https%3A%2F%2Fteachla.uclaacm.com)](https://teachla.uclaacm.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d79c1e55-71c6-45c5-8938-f0ffe477e8a3/deploy-status)](https://app.netlify.com/sites/unruffled-perlman-fe51d2/deploys)

Heya there, this is ACM Teach LA's website! It's goal is to give Teach LA a more formal online presence, and to create a one-stop shop for prospective tutors and schools to get more information about us!

This website is built with [Jekyll](https://jekyllrb.com), with some component implementations taken from [ACM's main website](https://github.com/uclaacm/website) (conforming to [ACM Design's Style Guide](https://github.com/uclaacm/Styleguide)). We build and test this website with [GitHub Actions](https://github.com/features/actions), and deploy it on [GitHub Pages](https://github.pages.com).

## Development Setup

To get a copy of this website running locally on your machine, you'll need [Ruby](https://www.ruby-lang.org/en/), a copy of this repo, and access to your system's shell/terminal.

*Note:* we recommend using [rvm](https://rvm.io/) instead of your system ruby; it makes life easier :smile:!

First, let's install [Bundler](https://bundler.io/), a gem environment manager for ruby. Type this anywhere in your shell:

```bash
$ gem install bundler
...
```

Then, let's clone our project with git, and install our dependencies!

```bash
$ git clone https://github.com/uclaacm/teach-la-website.git
$ cd teach-la-website
$ bundle
...
```

This should install all of our RubyGems dependencies! Note that we've committed a `Gemfile.lock`, so you should get a working set of gems.

Finally, run:

```bash

$ bundle exec jekyll serve
Configuration file: /Users/matt/code/tla/static/_config.yml
            Source: /Users/matt/code/tla/static
       Destination: /Users/matt/code/tla/static/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.17 seconds.
 Auto-regeneration: enabled for '/Users/matt/code/tla/static'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.

```

Visit whatever follows the server address line in your browser, which is usually [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

If you run into any issues, please let us know on our [issues tracker](https://github.com/uclaacm/teach-la-website)!

## Adding Yourself to the Teams Page

Are you a member of ACM Teach LA? You should add yourself to our teams page, so we can show you off to all of the schools we teach!

Each individual profile is generated by Jekyll from the data found in `_data/team.yml`. If you open it up, you'll find sets of objects that look like this:

```yaml
mwang:
  name: "Matt Wang"
  title: "Dev Team Director"
  img: mwang.jpg # semi-optional!
```

If you want to add yourself, all you need to do is add a top-level object with your information, and a photo! Drop your photo in `img/team/`.

Things to keep in mind:

* your top-level key must be unique! make sure that nobody else has it!
* `name` and `title` are mandatory!
* `img` is semi-optional: if you don't include it, we'll render a random image from [adorable avatars](http://avatars.adorable.io/). While it doesn't break the site, it's not ... super professional. A photo would be great! We'd **greatly prefer** if your image is 512x512.
* the `img` key's value should be the name of your image file; not the absolute path!

Once you think you're ready, commit all of your changes and send a PR our way. We should get you up and running in no time!
