source "https://rubygems.org"

gem "jekyll", "~> 4.2.2"
gem 'jekyll-seo-tag' # check out this https://jekyll.github.io/jekyll-seo-tag/usage/

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

group :test do
  gem 'rake'
  gem 'html-proofer', '>= 4.4.1'
end

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-category-pages"
  gem 'jekyll-feed'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Adding webrick since jekyll requires it
gem 'webrick'
