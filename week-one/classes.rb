require "date"

class Person
  attr_accessor :name, :dob

  def initialize(name, dob)
    @name = name
    @dob = Date.parse(dob)
  end

  def age
    2018 - @dob.year
  end

  def greet
    "Hey, #{@name}."
  end
end

class Employee < Person
  attr_accessor :job

  def initialize(name, dob, job)
    super(name, dob)
    @job = job
  end

  def greet
    "Hello, #{@name}, (#{job})."
  end
end
