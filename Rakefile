require 'html-proofer'

task default: %w[build]

task :build do
  sh "bundle exec jekyll build"
end

task :test do
  HTMLProofer.check_directory("./_site").run
end
