PEOPLE = ['Alice', 'Bob', 'Carol', 'Dave']

for person in PEOPLE
  puts "#{person} says 'Hi.'"
end

# Syntax 1, do/end block

PEOPLE.each do |person|
  puts "Hey, #{person}"
end

# Syntax 2, {}

PEOPLE.each { |person| puts "I like #{person}" }

people_upcased = PEOPLE.map { |person| person.upcase }
puts people_upcased.to_s

[45, 34, 124, 5].reduce(0) do |sum, value|
  puts "sum: #{sum}, value: #{value}"
  sum + value
end

po = PEOPLE.select { |name| name.match(/o/) }
           .map    { |name| name.upcase }

puts po.to_s
