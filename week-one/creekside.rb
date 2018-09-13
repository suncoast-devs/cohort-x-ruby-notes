require 'pg'

$pg = PG.connect(dbname: 'creekside_construction')
$answer = ''

def prompt(msg)
  print msg
  print ' > '
  $answer = gets.chomp
  puts ''
  $answer
end

def employees_query
  <<-SQL
    SELECT
      employees.name,
      departments.name
    AS department
    FROM employees
    LEFT JOIN departments
      ON departments.id = employees.department_id
  SQL
end

def list_employees
  $pg.exec(employees_query) do |result|
    result.each do |row|
      puts format('%s (%s)', *row.values_at('name', 'department'))
    end
  end
end

def add_employee
  name = prompt('Name?')
  hired_on = prompt('Hired On?')
  born_on = prompt('Date of Birth?')
  wage = (prompt('Hourly Wage?').to_f * 100).to_i

  query = format <<-SQL
    INSERT INTO employees (name, hired_on, born_on, wage)
    VALUES ('%s', '%s', '%s', %d)
  SQL, name, hired_on, born_on, wage

  $pg.exec(query)
  list_employees
end

while $answer != 'q'
  puts 'You can (l)ist employees or (a)dd a new employee.'
  prompt '?'

  case $answer
  when 'l'
    list_employees
  when 'a'
    add_employee
  else
    puts "I didn't understand your response."
  end
  puts "\n---\n\n"
end

puts 'Goodbye!'
