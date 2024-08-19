class EBook < Book
  attr_reader :format

  def initialize(title, author, pages, format)
    super(title, author, pages)
    @format = format
  end

  def description
    super + " and format is #{format}"
  end

  def to_yaml
    YAML.dump({
      title: @title,
      author: @author,
      pages: @pages,
      format: @format
    })
  end

  def self.from_yaml(yaml_string)
    data = YAML.load(yaml_string)
    new(data[:title], data[:author], data[:pages], data[:format])
  end
end