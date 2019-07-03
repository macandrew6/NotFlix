# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Movie.destroy_all
MovieGenre.destroy_all

# seed demo user
User.create!({
  email: 'ChuckNorris@gmail.com',
  password: 'numbchucks'
})

# seed genres
Genre.create!({name: "documentary"})
Genre.create!({name: "animation"})
Genre.create!({name: "action/adventure"})
Genre.create!({name: "horror"})

# formatting function
def formatMovie(movie_data, movie_img, movie_trailer, movie_vid)
  image = open(movie_img)
  trailer = open(movie_trailer)
  video = open(movie_vid)
  movie_data.image.attach(io: image, filename: "#{movie_data.title.split.join}.png")
  movie_data.trailer.attach(io: trailer, filename: "#{movie_data.title.split.join}.mp4")
  movie_data.movie.attach(io: video, filename: "#{movie_data.title.split.join}.mpv")
end

# --------------------------DOCUMENTARIES----------------------------- 

blue_planet = Movie.create!({
  title: 'Blue Planet II',
  description: 'This sequel to the award-winning nature series "Blue Planet" dives beneath Earth\'s oceans to reveal the dazzling vistas and amazing creatures there.',
  rating: 'TV-G',
  content_length: '9 episodes'
})
heroine = Movie.create!({
  title: 'Heroin(e)',
  description: 'This Oscar-nominated film follows three women -- a fire chief, a judge and a street missionary -- battling West Virginia\'s devastating opioid epidemic.',
  rating: 'TV-G',
  content_length: '8h 14m'
})
unacknowledged = Movie.create!({
  title: 'Unacknowledged',
  description: 'Noted UFO expert Dr. Steven Greer interviews witnesses and presents classified documents concerning the existence of extraterrestrials.',
  rating: 'TV-MA',
  content_length: '1h 42m'
})
truth = Movie.create!({
  title: 'The Truth About Alcohol',
  description: 'Emergency room doctor Javid Abdelmoneim endeavors to learn the truth about alcohol, both its benefits and risks, by exploring the science of drinking.',
  rating: 'TV-14',
  content_length: '58m'
})
wwII = Movie.create!({
  title: 'Truth About WWII',
  description: 'Footage of the most dramatic moments from World War II is restored in color and high definition for this historical documentary images/series.',
  rating: 'TV-14',
  content_length: '8h 9m'
})
planet_II = Movie.create!({
  title: 'Planet Earth II',
  description: 'In this sequel to the Emmy-winning "Planet Earth" series, viewers are treated to rich and intimate views of the natural diversity of our planet.',
  rating: 'TV-G',
  content_length: '6 episodes'
})
our_planet = Movie.create!({
  title: 'Our Planet',
  description: 'Experience our planet\'s natural beauty and examine how climate change impacts all living creatures in this ambitious documentary images/of spectacular scope.',
  rating: 'TV-G',
  content_length: '10h 14m'
})
earth = Movie.create!({
  title: 'earth',
  description: 'Experience our planet\'s natural beauty and examine how climate change impacts all living creatures in this ambitious documentary images/of spectacular scope.',
  rating: 'R',
  content_length: '4m'
})
dirty_money = Movie.create!({
  title: 'Dirty Money',
  description: 'From crippling payday loans to cars that cheat emissions tests, this investigative series exposes brazen acts of corporate greed and corruption.',
  rating: 'TV-MA',
  content_length: '12m'
})

DOCUMENTARY_TRAILER = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/planet-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/heroine-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/unacknowledged-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/truth-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/wwII-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/planetII-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/our-planet-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/trailers/earth-trailer.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/documentary/trailers/dirty-money-trailer.mp4"
]

DOCUMENTARY_IMG = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/blueplanet.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/heroine.jpg",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/unacknowledged.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/truth.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/wwII.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/planetearthII.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/ourplanet.jpg",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/images/earth.webp",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/documentary/images/dirty_money.jpg"
]

DOCUMENTARY_VID = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/planet-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/heroine-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/unacknowledged-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/truth-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/wwII-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/planetII-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/ourplanet-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/documentary/movies/earth-vid.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/documentary/movies/dirty-money-vid.mp4"
]

DOCUMENTARY_DATA = [blue_planet, heroine, unacknowledged, truth, wwII, planet_II, our_planet, earth, dirty_money]

DOCUMENTARY_DATA.each_with_index do |movie_data, i|
  formatMovie(movie_data, DOCUMENTARY_IMG[i], DOCUMENTARY_TRAILER[i], DOCUMENTARY_VID[i])
end

DOCUMENTARY_DATA.each do |movie|
  MovieGenre.create!({genre_id: 1, movie_id: movie.id})
end

### --------------------------ANIMATION----------------------------- 

bee = Movie.create!({
  title: "Bee Movie",
  description: "Barry, a worker bee stuck in a dead-end job making honey, sues humans when he learns they've been stealing bees' nectar all along.",
  rating: "PG",
  content_length: "1h 31m"
})
boss_baby = Movie.create!({
  title: 'Boss Baby',
  description: 'A kid finds himself at the center of a sinister corporate plot when his parents bring home a baby who only talks business when they\'re not around.',
  rating: 'PG',
  content_length: '1h 37m'
})
captain = Movie.create!({
  title: "Captain Underpants",
  description: "Fourth-grade pranksters George and Harold hypnotize their humorless principal into thinking he's an undies-adorned superhero.",
  rating: "PG",
  content_length: "1h 28m"
})
incredibles = Movie.create!({
  title: 'The Incredibles 2',
  description: "When Elastigirl gets recruited for a high-profile crime-fighting mission, Mr. Incredible takes on his toughest assignment ever: full-time parenting.",
  rating: 'PG',
  content_length: '1h 57m'
})
despicable = Movie.create!({
  title: "Despacito Me 3",
  description: "After failing to arrest an '80s child star turned supervillain, Gru loses his job but gains a family member when he learns he's got a long-lost twin.",
  rating: "PG",
  content_length: "1h 29m"
})
cars = Movie.create!({
  title: "Cars 3",
  description: "Sleek female race car Cruz Ramirez helps old-time champion Lightning McQueen make a comeback as he faces a new generation of high-tech racers.",
  rating: "G",
  content_length: "1h 42m"
})
bolt = Movie.create!({
  title: "Bolt",
  description: "This tale follows German shepherd Bolt, a canine actor who makes a cross-country trek when he's mistakenly shipped from Hollywood to New York City.",
  rating: "PG",
  content_length: "1h 38m"
})
hercules = Movie.create!({
  title: "Hercules",
  description: "The heavenly Hercules is stripped of his immortality and raised on Earth instead of Olympus, where he's forced to take on Hades and assorted monsters.",
  rating: "PG",
  content_length: "1h 40m"
})
mulan = Movie.create!({
  title: "Mulan",
  description: "Disney brings an ancient legend to life in this animated tale of a tomboy who disguises herself as a man so she can fight with the Chinese Army.",
  rating: "PG",
  content_length: "1h 31m"
})

ANIMATION_IMG = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/bee.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/bossbaby.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/captain.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/incredibles.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/despacito.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/cars.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/images/bolt.webp",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/images/hercules.webp",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/images/mulan.webp"
]

ANIMATION_TRAILER = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/bee-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/baby-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/captain-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/incredible-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/despacito-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/cars-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/trailers/bolt-trailer.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/trailers/hercules-trailer.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/trailers/mulan+trailer.mp4"
]

ANIMATION_VIDS = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/bee-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/baby-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/captain-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/incredible-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/despacito-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/cars-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/animation/movies/bolt-vid.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/movies/hercules-vid.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/animation/movies/mulan-vid.mp4"
]

ANIMATION_MOVIE_DATA = [bee, boss_baby, captain, incredibles, despicable, cars, bolt, hercules, mulan]

ANIMATION_MOVIE_DATA.each_with_index do |movie_data, i|
  formatMovie(movie_data, ANIMATION_IMG[i], ANIMATION_TRAILER[i], ANIMATION_VIDS[i])
end

ANIMATION_MOVIE_DATA.each do |movie|
  MovieGenre.create!({genre_id: 2, movie_id: movie.id})
end

# --------------------------ACTION/ADVENTURE----------------------------- 

gog = Movie.create!({
  title: 'Gaurdians of the Galaxy',
  description: 'The ragtag, wisecracking band of miscreants known as the Guardians of the Galaxy return to unravel the mystery of Peter "Star Lord" Quill\'s origins.',
  rating: 'PG-13',
  content_length: '2h 16m'
})
polar = Movie.create!({
  title: "Polar",
  description: "An assassin on the verge of retirement must put the good life on hold when his greedy boss sends a squad of young, ruthless killers to take him out.",
  rating: "TV-MA",
  content_length: "1hr 58m"
})
black_panther = Movie.create!({
  title: "Black Panther",
  description: "T'Challa, the superpowered new leader of the hidden, highly advanced African nation of Wakanda, strives to protect his home from enemies old and new.",
  rating: "PG-13",
  content_length: "2h 14m"
})
avengers = Movie.create!({
  title: "Avengers: Infinity War",
  description: "Superheroes amass to stop intergalactic sociopath Thanos from acquiring a full set of Infinity Stones and wiping out half of all life in the universe.",
  rating: "PG-13",
  content_length: "2h 29m"
})
get_smart = Movie.create!({
  title: "Get Smart",
  description: "When the identities of secret agents are compromised, hapless Maxwell Smart teams with far more capable Agent 99 to thwart an evil terrorist group.",
  rating: "PG-13",
  content_length: "1h 49m"
})
ipman = Movie.create!({
  title: "Ipman 2",
  description: "New in Hong Kong, martial arts instructor Ip Man perseveres and retaliates against his rivals' opposition to the Wing Chun fighting style he teaches.",
  rating: "R",
  content_length: "1h 48m"
})
thor = Movie.create!({
  title: "Thor: Ragnorok",
  description: "To save Asgard from a bloodthirsty goddess of death, the mighty Thor will have to battle his way to freedom and find a way back home.",
  rating: "PG-13",
  content_length: "2h 11m"
})
killer = Movie.create!({
  title: "Killer Elite",
  description: "In this globe-trotting thriller, a former special ops agent is forced out of retirement when his mentor is kidnapped by a ruthless criminal.",
  rating: "R",
  content_length: "1h 56m"
})
revenger = Movie.create!({
  title: "Revenger",
  description: "Disney brings an ancient legend to life in this animated tale of a tomboy who disguises herself as a man so she can fight with the Chinese Army.",
  rating: "R",
  content_length: "1h 47m"
})

ACTION_IMG = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/avenger.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/blackpanth.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/getsmart.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/guardian.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/ipman.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/killer.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/polar.jpg",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/images/thor.webp",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/action/images/revenger.jpg"
]

ACTION_TRAILER = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/avenger-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/black-panther-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/getsmart-trail.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/guardian-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/ipmap-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/killer-trail.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/polar-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/trailers/thor-trailer.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/action/trailers/revenger-trailer.mp4"
]

ACTION_VIDS = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/avengers-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/black-pather-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/get-smart-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/guardian-movie.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/ipmap-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/killer-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/polar-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/action/movies/thor-vid.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/action/movies/revenger-vid.mp4"
]

ACTION_MOVIE_DATA = [avengers, black_panther, get_smart, gog, ipman, killer, polar, thor, revenger]

ACTION_MOVIE_DATA.each_with_index do |movie_data, i|
  formatMovie(movie_data, ACTION_IMG[i], ACTION_TRAILER[i], ACTION_VIDS[i])
end

ACTION_MOVIE_DATA.each do |movie|
  MovieGenre.create!({genre_id: 3, movie_id: movie.id})
end

# --------------------------HORROR----------------------------- 

bird_box = Movie.create!({
  title: 'Bird Box',
  description: 'Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.',
  rating: 'R',
  content_length: '2h 4m'
})
chucky = Movie.create!({
  title: 'Cult of Chucky',
  description: 'Following a string of murders in the asylum where she\'s confined, Nica Pierce begins to wonder whether Chucky is real after all.',
  rating: 'R',
  content_length: '1h 30m'
})
terrifier = Movie.create!({
  title: 'Terrifier',
  description: 'On Halloween night, inside a dilapidated apartment building, Art the Clown stalks his victims, slicing and slaughtering in terrifying silence.',
  rating: 'TV-MA',
  content_length: '1h 24m'
})
conjuring = Movie.create!({
  title: 'The Conjuring',
  description: 'Based on true events, this spine-chiller tells the story of a New England family who begins having encounters with spirits in their farmhouse.',
  rating: 'R',
  content_length: '1h 51m'
})
final = Movie.create!({
  title: 'Final Destination 3',
  description: 'When a girl prevents her premonition of a deadly roller-coaster mishap from coming true, the survivors must face the consequences of cheating death.',
  rating: 'R',
  content_length: '1h 32m'
})
american = Movie.create!({
  title: 'American Horror Story',
  description: 'This twisted Emmy-winning drama plays upon the power of supernatural fears and everyday horrors, exploring humankind\'s unsettling capacity for evil.',
  rating: 'TV-MA',
  content_length: '7 seasons'
})
freddie = Movie.create!({
  title: 'Freddie vs. JSON',
  description: 'Fusing slasher franchises, this hybrid of horror pits nightmarish Freddy Krueger against serial killer Jason Voorhees in the ultimate showdown.',
  rating: 'R',
  content_length: '1h 35m'
})
texas = Movie.create!({
  title: 'Texas Chainsaw Massacre',
  description: 'The sole survivor of a 1973 killing spree breaks her silence to tell the story of what really happened on that grisly, unforgettable day.',
  rating: 'R',
  content_length: '1h 38m'
})
horror_homes = Movie.create!({
  title: 'Horror Homes',
  description: 'Dream homes turn into property nightmares when mold, maggots, natural disasters and other inconveniences move in.',
  rating: 'R',
  content_length: '1h 30m'
})

HORROR_IMG = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/american.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/birdbox.jpg",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/chucky.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/conjuring.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/finaldes.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/freddy.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/terrified.webp",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/images/texas.webp",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/horror/images/horror-homes.webp"
]

HORROR_TRAILER = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/american-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/birdbox-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/chucky-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/conjuring-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/final-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/freddie-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/terrified-trailer.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/trailers/texas-trailer.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/horror/trailers/horror-homes-trailer.mp4"
]

HORROR_VIDS = [
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/american-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/bird-box-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/chucky-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/conjuring-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/final-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/freddie-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/terrified-vid.mp4",
  "https://s3-us-west-1.amazonaws.com/not-flix-dev/movie-data/horror/movies/texas-vid.mp4",
  "https://not-flix-dev.s3-us-west-1.amazonaws.com/movie-data/horror/movies/horror-homes-vid.mp4"
]

HORROR_MOVIE_DATA = [american, bird_box, chucky, conjuring, final, freddie, terrifier, texas, horror_homes]

HORROR_MOVIE_DATA.each_with_index do |movie_data, i|
  formatMovie(movie_data, HORROR_IMG[i], HORROR_TRAILER[i], HORROR_VIDS[i])
end

HORROR_MOVIE_DATA.each do |movie|
  MovieGenre.create!({genre_id: 4, movie_id: movie.id})
end
