require 'html-proofer'

task default: %w[build]

task :build do
  sh "bundle exec jekyll build"
end

task :test => :build do
  options = {
    :assume_extension => true,
  }
  HTMLProofer.check_directory("./_site").run
end
