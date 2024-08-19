class Person
  def initialize(age)
    @age = age
  end

  def older?(other_person)
    age > other_person.age
  end

  protected

  attr_reader :age
end

malory = Person.new(62)
sterling = Person.new(42)

puts malory.older?(sterling)
puts sterling.older?(malory)

puts malory.age
