require "yaml"

class Book
  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end

  def save_to_file
    Dir.mkdir("output") unless Dir.exist?("output")
    
    textname = "output/#{title}.txt"
    
    File.open(textname, "w") do |file|
      file.puts "Book: #{title}"
      file.puts "Author: #{author}"
      file.puts "Pages: #{pages}"
    end
  end

  def description
    "the title of book is #{title}, author is #{author} and pages of #{pages}"
  end

  def to_yaml
    YAML.dump({
      title: @title,
      author: @author,
      pages: @pages
    })
  end

  def self.from_yaml(yaml_string)
    data = YAML.load(yaml_string)
    new(data[:title], data[:author], data[:pages])
  end
end