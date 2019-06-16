require 'html-proofer'

task default: %w[build]

task :build do
  sh "bundle exec jekyll build"
  #HTMLProofer.check_directory("./_site").run
end

task :test do
  # sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site").run
end
