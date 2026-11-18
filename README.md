
# Teach LA Website

Heya there, this is ACM Teach LA's website! It's goal is to give Teach LA a more formal online presence, and to create a one-stop shop for prospective tutors and schools to get more information about us!

The website is built using a MERN stack, and hosted on ACM UCLA's servers!

# Setup Instructions

### Prerequisites

You must have Docker installed and running on your device, usually as Docker Desktop for macOS or Windows, and `docker-engine` and `docker-compose-plugin` for Linux users.

### For Windows users
Ensure you have Docker Desktop installed with the WSL2 backend enabled in the settings.

Also ensure you have run `git config --global core.autocrlf false` before cloning

### Build instructions

Navigate to the root of this directory, where the `docker-compose.yml` file is stored.

Navigate to `\backend` and create a `.env` file, and set `MONGO_URI=mongodb://mongo:27017/teachla` (used for development)

Now run `docker-compose up -d --build`, and navigate to `http://localhost` in your web browser to see the website.


# Old README


![Test Jekyll Build](https://github.com/uclaacm/teach-la-website/workflows/Test%20Jekyll%20Build/badge.svg)
[![Site Up Status](https://img.shields.io/website?url=https%3A%2F%2Fteachla.uclaacm.com)](https://teachla.uclaacm.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d79c1e55-71c6-45c5-8938-f0ffe477e8a3/deploy-status)](https://app.netlify.com/sites/unruffled-perlman-fe51d2/deploys)

Heya there, this is ACM Teach LA's website! It's goal is to give Teach LA a more formal online presence, and to create a one-stop shop for prospective tutors and schools to get more information about us!

This website is built with [Jekyll](https://jekyllrb.com), with some component implementations taken from [ACM's main website](https://github.com/uclaacm/website) (conforming to [ACM Design's Style Guide](https://github.com/uclaacm/Styleguide)). We build and test this website with [GitHub Actions](https://github.com/features/actions), and deploy it on [Netlify](https://www.netlify.com/). We will be running on ruby 3.2.5 and jekyll 4.3.3. You will find detailed installation and setup instructions below for both macOS and Windows.

## 🍎 macOS Setup Instructions

To get a copy of this website running locally on your machine, you'll need [Ruby](https://www.ruby-lang.org/en/), a copy of this repo, and access to your system's shell/terminal.

**We recommend using [`rbenv`](https://github.com/rbenv/rbenv) to manage Ruby versions.**

### Ruby & Bundler Installation (If Ruby 3.2.5 is not yet installed)

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install rbenv and ruby-build
brew install rbenv ruby-build

# Set up rbenv in your shell
rbenv init
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby 3.2.5 and set it globally
rbenv install 3.2.5
rbenv global 3.2.5

# Check that Ruby and gem are set up correctly
ruby -v  # should show 3.2.5
gem install bundler
```

Then, let's clone our project with git, and install our dependencies!

```bash
git clone https://github.com/uclaacm/teach-la-website.git
cd teach-la-website
bundle install
```

This should install all of our RubyGems dependencies! Note that we've committed a `Gemfile.lock`, so you should get a working set of gems.

### Run the Site Locally

Run:

```bash
bundle exec jekyll serve
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

Your site will be served locally at: [http://localhost:4000](http://localhost:4000). You may also visit the server address line in your browser, which is usually [http://127.0.0.1:4000/](http://127.0.0.1:4000/).


If you run into any issues, you may also try:

```bash
bundle exec jekyll clean
bundle update
bundle exec jekyll serve

```

## 💻 Windows Setup Instructions (via RubyInstaller)

If you're on **Windows**, follow these instructions instead of the macOS setup above:

### 1. Install Ruby (with DevKit)

- Visit: [https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)
- Download and install **Ruby+Devkit 3.2.5** (may have to go in Archives)
- During install, select the option to run `ridk install`, and enable MSYS2 base + development toolchain.

### 2. Install Bundler

Open **Command Prompt** or **PowerShell**, then run:

```bash
gem install bundler
```

### 3. Clone the Project and Install Dependencies

```bash
git clone https://github.com/uclaacm/teach-la-website.git
cd teach-la-website
bundle install
```

### 4. Run the Site Locally

```bash
bundle exec jekyll serve
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

Your site will be served locally at: [http://localhost:4000](http://localhost:4000). You may also visit the server address line in your browser, which is usually [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

### ✅ Notes for Windows users

- You may see build errors if native extensions fail to compile — make sure the DevKit is properly installed.
- Consider using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/) for a smoother Unix-like development experience.
- Use `chcp 65001` to set terminal to UTF-8 encoding if you run into encoding issues.
---

## Contribution Workflow

Want to make a change to the website? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `bundle exec jekyll build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/teach-la-website/pulls) with your changes, and let someone on the dev team know.
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

---

## Adding Yourself to the Teams Page

[Moved to here](https://github.com/uclaacm/teach-la-website/blob/master/_team/README.md)

## Troubleshooting Tips

1. Make sure you're using **Ruby 3.2.5**. Run:

   ```bash
   ruby -v
   ```

   If not, follow the Ruby installation instructions above.

2. If `bundle install` fails, try updating your gems:

   ```bash
   gem update --system
   gem update bundler
   ```

3. If `jekyll serve` crashes, clean and retry:

   ```bash
   bundle exec jekyll clean
   bundle exec jekyll serve
   ```

4. If you get file write errors like `Errno::EINTR`, try moving the repo to a non-synced folder (e.g. not inside iCloud Drive or Desktop).


If you run into any issues, please let us know on our [issues tracker](https://github.com/uclaacm/teach-la-website)!

---
