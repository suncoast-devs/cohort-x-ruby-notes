# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.create!([
  {
    name: 'Blood Rage',
    description: '"Life is Battle; Battle is Glory; Glory is ALL"',
    min_players: 2,
    max_players: 5,
    min_duration: 60,
    max_duration: 90,
    min_age: 14
  },
  {
    name: 'Rising Sun',
    description: 'Rising Sun is a game about honor, negotiation, and warfare in a feudal Japan where the ancient gods (kami) have returned to rebuild the empire.',
    min_players: 3,
    max_players: 6,
    min_duration: 90,
    max_duration: 120,
    min_age: 14
  },
  {
    name: 'Charterstone',
    description: 'In Charterstone, a competitive legacy game, you construct buildings and populate a shared village. Building stickers are permanently added to the game board and become action spaces for any player to use. Thus, you start off with simple choices and few workers, but soon you have a bustling village with dozens of possible actions.',
    min_players: 1,
    max_players: 6,
    min_duration: 45,
    max_duration: 75,
    min_age: 14
  },
  {
    name: 'Viticulture',
    description: 'In Viticulture, the players find themselves in the roles of people in rustic, pre-modern Tuscany who have inherited meager vineyards. They have a few plots of land, an old crushpad, a tiny cellar, and three workers. They each have a dream of being the first to call their winery a true success.',
    min_players: 2,
    max_players: 6,
    min_duration: 90,
    max_duration: 90,
    min_age: 13
  }
])
