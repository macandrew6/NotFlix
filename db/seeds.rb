# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Movie.destroy_all

User.create!({
  email: 'ChuckNorris@gmail.com',
  password: 'numbchucks'
})

bird_box = Movie.create!({
  title: 'Bird Box',
  description: 'Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.',
  rating: 'R',
  content_length: '2h 4m'
})
bird_box_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/bird_box.jpg")
bird_box.image.attach(io: bird_box_img, filename: "bird_box_img.png")

boss_baby = Movie.create!({
  title: 'Boss Baby',
  description: 'A kid finds himself at the center of a sinister corporate plot when his parents bring home a baby who only talks business when they\'re not around.',
  rating: 'PG',
  content_length: '1h 37m'
})
boss_baby_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/boss_baby.webp")
boss_baby.image.attach(io: boss_baby_img, filename: "boss_baby_img.png")

gog = Movie.create!({
  title: 'Gaurdians of the Galaxy',
  description: 'The ragtag, wisecracking band of miscreants known as the Guardians of the Galaxy return to unravel the mystery of Peter "Star Lord" Quill\'s origins.',
  rating: 'PG-13',
  content_length: '2h 16m'
})
gog_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/gog.webp")
gog.image.attach(io: gog_img, filename: "gog_img.png")

incredibles = Movie.create!({
  title: 'The Incredibles 2',
  description: 'When Elastigirl gets recruited for a high-profile crime-fighting mission, Mr. Incredible takes on his toughest assignment ever: full-time parenting.',
  rating: 'PG',
  content_length: '1h 57m'
})
incredibles_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/incredibles.webP")
incredibles.image.attach(io: incredibles_img, filename: "incredibles_img.png")

our_planet = Movie.create!({
  title: 'Our Planet',
  description: 'Experience our planet\'s natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.',
  rating: 'TV-G',
  content_length: '10h 14m'
})
our_planet_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/our_planet.jpg")
our_planet.image.attach(io: our_planet_img, filename: "our_planet_img.png")