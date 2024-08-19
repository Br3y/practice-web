# file = File.open("user.txt")

# puts file.read
# file.close
###
# file_data = File.read("user.txt").split

# puts file_data
###
File.foreach('users.txt') { |line| puts line }
###
File.open('users.txt', 'w') { |f| f.write puts "#{Time.now} - User logged in\n" }
###
File.write('user.txt', [1, 2, 3].join("\n"), mode: 'a')
##
# File.rename("user.txt", "users.txt")
File.size('users.txt')
