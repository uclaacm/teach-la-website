require "nokogiri"
class FindHeadersGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config)
    site.documents.each do |page|
      if page.url[0..5] == "/docs/" and page.path[page.path.size-2..-1] == "md"
        doc = Nokogiri::HTML(parser.convert(page.content))
        page.data["headers"] = []
        doc.css('h1','h2','h3','h4').each do |heading|
          if heading['class'] != "no_toc"
            page.data["headers"] << { "title" => heading.text, "url" => [page.url, heading['id']].join("#") }
          end
        end
      end
    end
  end
end

