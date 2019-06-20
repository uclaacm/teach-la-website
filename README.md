# teach-la-website

(WIP) a quick frontend for ACM Teach LA!

*Note:* we've elected to use Travis to auto-build and deploy to GitHub Pages rather than use the `github-pages` gem. This allows us a bit more fine-tuning in exactly what is deployed, and allows for more modularity in the future!

## Development Setup (WIP)

To take a peek, first do:

```bash
gem install bundler
```

Then, run:

```bash
bundle
```

This should install all of our RubyGems dependencies!

Finally, run:

```bash

$ bundle exec jekyll serve
Configuration file: /Users/malsf21/code/teach-la-website/_config.yml
            Source: /Users/malsf21/code/teach-la-website
       Destination: /Users/malsf21/code/teach-la-website/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.219 seconds.
 Auto-regeneration: enabled for '/Users/malsf21/code/teach-la-website'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.

```

Visit whatever follows the server address line, which is usually `http://127.0.0.1:4000/`.
