def square(n)
  n * n
end

puts "Give me a number, larger than 10 and I'll square it:"

number = gets.strip.to_i

if number > 10
  puts square(number)
else
  puts "#{number} is not larger than 10"
end