class Person
  attr_accessor :name, :age

  @@count = 0

  def initialize(name, age)
    @name = name
    @age = age
    @@count += 1
  end

  def introduce
    "Hello #{name}, you're age is #{age}"
  end

  def self.count
    "person created: #{@@count}"
  end

  def save_to_file(filename)
    Dir.mkdir(filename)

    File.open("#{filename}/#{}")
    
  end
end