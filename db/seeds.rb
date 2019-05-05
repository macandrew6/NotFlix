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

Genre.create({name: "animation"})
Genre.create({name: "action/adventure"})
Genre.create({name: "documentary"})
Genre.create({name: "horror"})

### --------------------------ANIMATION----------------------------- 
bee = Movie.create({
  title: "Bee Movie",
  description: "Barry, a worker bee stuck in a dead-end job making honey, sues humans when he learns they've been stealing bees' nectar all along.",
  rating: "PG",
  content_length: "1h 31m"
})
bee_vid = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/videos/Bee+Movie+%E2%80%90+Made+with+Clipchamp.mp4")
bee_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/AAAABRZbex0pOjoiGVgk4LiVlyL9Np07h0sXpWiThMa8MJGonhFusUamMSJInGf5Ng9Eqa4Hk-O267AsyS8unvY7Mg7IblvzyIf4.webp")
bee.movie.attach(io: bee_vid, filename: "bee_vid.png")
bee.image.attach(io: bee_img, filename: "bee_img.png")

boss_baby = Movie.create!({
  title: 'Boss Baby',
  description: 'A kid finds himself at the center of a sinister corporate plot when his parents bring home a baby who only talks business when they\'re not around.',
  rating: 'PG',
  content_length: '1h 37m'
})
boss_baby_vid = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/videos/Boss+Baby+%E2%80%90+Made+with+Clipchamp+(5).mp4")
boss_baby_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/boss_baby.webp")
boss_baby.movie.attach(io: boss_baby_vid, filename: "boss_baby_vid.png")
boss_baby.image.attach(io: boss_baby_img, filename: "boss_baby_img.png")

=begin
captain = Movie.create({
  title: "Captain Underpants",
  description: "Fourth-grade pranksters George and Harold hypnotize their humorless principal into thinking he's an undies-adorned superhero.",
  rating: "PG",
  content_length: "1h 28m"
})
captain_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/AAAABShbycpQOxZmKd8o7rlwPDLO8t4CjQNZ5DySHwWqPhe8iNOy5y-kA8Fm9JcLrDcF17wRqeyyfPcg3NeCwSL-SzdjxCCyuOqS.webp")
captain.image.attach(io: captain_img, filename: "captain_img.png")

incredibles = Movie.create!({
  title: 'The Incredibles 2',
  description: "When Elastigirl gets recruited for a high-profile crime-fighting mission, Mr. Incredible takes on his toughest assignment ever: full-time parenting.",
  rating: 'PG',
  content_length: '1h 57m'
})
incredibles_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/incredibles.webP")
incredibles.image.attach(io: incredibles_img, filename: "incredibles_img.png")

despicable = Movie.create({
  title: "Despacito Me 3",
  description: "After failing to arrest an '80s child star turned supervillain, Gru loses his job but gains a family member when he learns he's got a long-lost twin.",
  rating: "PG",
  content_length: "1h 29m"
})
despicable_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/AAAABTC2rctY_Az6QyVXWxLBLVTOxWGUHjxM9SY3Ft8f9TnYVnbN5KxU-rGhg_gFEUS9wUppFE8UPCjEn60peomsSwCcFhxyrsbC.webp")
despicable.image.attach(io: despicable_img, filename: "despicable_img.png")

cars = Movie.create({
  title: "Cars 3",
  description: "Sleek female race car Cruz Ramirez helps old-time champion Lightning McQueen make a comeback as he faces a new generation of high-tech racers.",
  rating: "G",
  content_length: "1h 42m"
})
cars_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/AAAABds2s6wMUNGslsmulRn1JdcfjCQS797b0T7oZ8fdBfHynNdlSvTahotrFqmXJELhBHb-4hwiKfwZHel-f3XQ7iOudoAYZOgD.webp")
cars.image.attach(io: cars_img, filename: "cars_img.png")

bolt = Movie.create({
  title: "Bolt",
  description: "This tale follows German shepherd Bolt, a canine actor who makes a cross-country trek when he's mistakenly shipped from Hollywood to New York City.",
  rating: "PG",
  content_length: "1h 38m"
})
bolt_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/animation/images/AAAABevscmjVm8HdEWfxeX1qroJHhqLS_oIky38U_VVQXt1vwinXiCGjltoCAQ7wot54pmc8BelX2cQhmTSiMNUTlvtzzD5dLPG5.webp")
bolt.image.attach(io: bolt_img, filename: "bolt_img.png")


# --------------------------ACTION/ADVENTURE----------------------------- 
gog = Movie.create!({
  title: 'Gaurdians of the Galaxy',
  description: 'The ragtag, wisecracking band of miscreants known as the Guardians of the Galaxy return to unravel the mystery of Peter "Star Lord" Quill\'s origins.',
  rating: 'PG-13',
  content_length: '2h 16m'
})
gog_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/gog.webp")
gog.image.attach(io: gog_img, filename: "gog_img.png")

polar = Movie.create!({
  title: "Polar",
  description: "An assassin on the verge of retirement must put the good life on hold when his greedy boss sends a squad of young, ruthless killers to take him out.",
  rating: "TV-MA",
  content_length: "1hr 58m"
})
polar_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABSaJmHd_YZljL0t7HAFH52BxFRYGFqpExe9FvUHrAGGnX_W_k8rCOgoU6zuBgDlxe-2PsN1B72576MuO7D3BIJtq8PFyvKLw.jpg')
polar.image.attach(io: polar_img, filename: "polar_img.png")

black_panther = Movie.create!({
  title: "Black Panther",
  description: "T'Challa, the superpowered new leader of the hidden, highly advanced African nation of Wakanda, strives to protect his home from enemies old and new.",
  rating: "PG-13",
  content_length: "2h 14m"
})
black_panther_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABUwS5ZdHwB9mCt-CKbeKp7FROetGnULNjCXLufqeWNK4GuRC_06mRagzdoYcj553_5zaR6xbouwBTl6CJJ1mfinpmOyfSx2c.webp')
black_panther.image.attach(io: black_panther_img, filename: "black_panther_img.png")

avengers = Movie.create!({
  title: "Avengers: Infinity War",
  description: "Superheroes amass to stop intergalactic sociopath Thanos from acquiring a full set of Infinity Stones and wiping out half of all life in the universe.",
  rating: "PG-13",
  content_length: "2h 29m"
})
avengers_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABVY8Dv4zRmAxZQjOczeixjTqRylAk5vmH6Dti7a9n64EfHYGjhJVB-ErR6H3K8yVQwhVPDJiKzvyHFzMLzUq9R0ymZ2Tb9Il.webp')
avengers.image.attach(io: avengers_img, filename: "avengers_img.png")

get_smart = Movie.create!({
  title: "Get Smart",
  description: "When the identities of secret agents are compromised, hapless Maxwell Smart teams with far more capable Agent 99 to thwart an evil terrorist group.",
  rating: "PG-13",
  content_length: "1h 49m"
})
get_smart_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABYLNjlf1VuKp_RqrPGzqjbrzcGrZ9-1qZjREUr39TVNUBOnrcmBe1HfqlvNFlK8t8T0jQQI45yfZ_H5IXp48uFUVvanXeyb5.webp')
get_smart.image.attach(io: get_smart_img, filename: "get_smart_img.png")

ipman = Movie.create!({
  title: "Ipman 2",
  description: "New in Hong Kong, martial arts instructor Ip Man perseveres and retaliates against his rivals' opposition to the Wing Chun fighting style he teaches.",
  rating: "R",
  content_length: "1h 48m"
})
ipman_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABYtStgyNrYscq1N7IXoDibldv3pUp42FYDlQUGcEUdcp4YdvZm5JK0TYdgwFCErwhRYMzoSjsQrpD4RAZXaa4Fw05NiwCE-p.webp')
ipman.image.attach(io: ipman_img, filename: "ipman_img.png")

thor = Movie.create!({
  title: "Thor: Ragnorok",
  description: "To save Asgard from a bloodthirsty goddess of death, the mighty Thor will have to battle his way to freedom and find a way back home.",
  rating: "PG-13",
  content_length: "2h 11m"
})
thor_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABamMn66yajkaGDkx_EuoIOcdkglIkjhtP40eYztnc4gAM6gRVKr7sU9ijJuVqWYSDHqH0OnJOGPSbeigh3eZgXizC_Lu-OT1.webp')
thor.image.attach(io: thor_img, filename: "thor_img.png")

killer = Movie.create!({
  title: "Killer Elite",
  description: "In this globe-trotting thriller, a former special ops agent is forced out of retirement when his mentor is kidnapped by a ruthless criminal.",
  rating: "R",
  content_length: "1h 56m"
})
killer_img = open('https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/action-adventure/images/AAAABe5C6CTKlI6mkMw_h-3u9q8YzdrWV9eV-6p4ubvlbnbcJi6k08actEZZyGsKmIsYf21FkhNuoRGVQQmMScs6iXtakrt5oie5.webp')
killer.image.attach(io: killer_img, filename: "killer_img.png")


# --------------------------DOCUMENTARIES----------------------------- 
blue_planet = Movie.create!({
  title: 'Blue Planet II',
  description: 'This sequel to the award-winning nature series "Blue Planet" dives beneath Earth\'s oceans to reveal the dazzling vistas and amazing creatures there.',
  rating: 'TV-G',
  content_length: '9 episodes'
})
blue_planet_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABajGT2MoL4fKStjxz75yuSSNK6M2cbtbaVNVMhmMwfjlIZDfzAdpEmjrsMX1fPMII1R7A_kK3whOx4DaYEpijtuUWcOIEWLM.webp")
blue_planet.image.attach(io: blue_planet_img, filename: "blue_planet_img.png")

heroine = Movie.create!({
  title: 'Heroin(e)',
  description: 'This Oscar-nominated film follows three women -- a fire chief, a judge and a street missionary -- battling West Virginia\'s devastating opioid epidemic.',
  rating: 'TV-G',
  content_length: '8h 14m'
})
heroine_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABRww2_-O8j7P6xoW1vpeeplXOOT-g4P9pXT2lUF6-guHKMfsaYJOWM2h1U60ovBiJ6OlBAnfEIsdPkWVtsUcCxAJB4hS0rYr.jpg")
heroine.image.attach(io: heroine_img, filename: "heroine_img.png")

unacknowledged = Movie.create!({
  title: 'Unacknowledged',
  description: 'Noted UFO expert Dr. Steven Greer interviews witnesses and presents classified documents concerning the existence of extraterrestrials.',
  rating: 'TV-MA',
  content_length: '1h 42m'
})
unacknowledged_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABWLBdZQMS65Zlac17UmTGmqSEq_HlPF4lVaP_9pWj0nnqd50SwQLYkIgXndm3wt5YVhTL7IVcmV5sQymWlkc6FRwsWJ7_js4.webp")
unacknowledged.image.attach(io: unacknowledged_img, filename: "unacknowledged_img.png")

truth = Movie.create!({
  title: 'The Truth About Alcohol',
  description: 'Emergency room doctor Javid Abdelmoneim endeavors to learn the truth about alcohol, both its benefits and risks, by exploring the science of drinking.',
  rating: 'TV-14',
  content_length: '58m'
})
truth_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABXFgiOjpVyJ7ULaRsl4_fqWMegeu3Xqb_fM0V8pcwGORVMTnrmZBb9V7qNUrBMZKoq4J7j5lWxid2QHiTMQcQxmtY55P-O1D.webp")
truth.image.attach(io: truth_img, filename: "truth.png")

wwII = Movie.create!({
  title: 'Truth About WWII',
  description: 'Footage of the most dramatic moments from World War II is restored in color and high definition for this historical documentary images/series.',
  rating: 'TV-14',
  content_length: '8h 9m'
})
wwII_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABYJPX0EF7m41U-D3mA2sRleOWzqdMhyvnvnNlFe4HHbfkU1aJ6CfVT_kI3Tqr-KsvoE_ACXDLgWQnZHI8IAJCvAHdPCCardU.webp")
wwII.image.attach(io: wwII_img, filename: "wwII_img.png")

planet_II = Movie.create!({
  title: 'Planet Earth II',
  description: 'In this sequel to the Emmy-winning "Planet Earth" series, viewers are treated to rich and intimate views of the natural diversity of our planet.',
  rating: 'TV-G',
  content_length: '6 episodes'
})
planet_II_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/AAAABZ7AbREqDVaFUKW54zr7EygA6SGX5wEq0MKyZtON3GjfOEtbpsUOJ8vD3aqhJnWUU-ziBqGxij2m3pdDXeAWLjxqX8dMaBtk.webp")
planet_II.image.attach(io: planet_II_img, filename: "planet_II_img.png")

our_planet = Movie.create!({
  title: 'Our Planet',
  description: 'Experience our planet\'s natural beauty and examine how climate change impacts all living creatures in this ambitious documentary images/of spectacular scope.',
  rating: 'TV-G',
  content_length: '10h 14m'
})
our_planet_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/documentary/images/our_planet.jpg")
our_planet.image.attach(io: our_planet_img, filename: "our_planet_img.png")


# --------------------------HORROR----------------------------- 
bird_box = Movie.create!({
  title: 'Bird Box',
  description: 'Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.',
  rating: 'R',
  content_length: '2h 4m'
})
bird_box_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABRAzyNHvCY63fbb4n60C35aAXQIwDxpvCA0oI_j_ul_ArncUtAAJMhoeEolCbRcmmuH_ecnB1KA7z7Yu3XQvwJj75u17XIL2.jpg")
bird_box.image.attach(io: bird_box_img, filename: "bird_box_img.png")

chucky = Movie.create!({
  title: 'Cult of Chucky',
  description: 'Following a string of murders in the asylum where she\'s confined, Nica Pierce begins to wonder whether Chucky is real after all.',
  rating: 'R',
  content_length: '1h 30m'
})
chucky_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABQHusBrmCk0gxmocoxj6U_yNFuUfWuuXIaLVQjeF57qicazLLbdphcSuWXMj-o8Mx89XrQOv3hW5mCBJhjvDFJEpZsa91K_L.webp")
chucky.image.attach(io: chucky_img, filename: "chucky.png")

terrifier = Movie.create!({
  title: 'Terrifier',
  description: 'On Halloween night, inside a dilapidated apartment building, Art the Clown stalks his victims, slicing and slaughtering in terrifying silence.',
  rating: 'TV-MA',
  content_length: '1h 24m'
})
terrifier_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABShajkmgBWvuJnpHhwV-CeWOJp39ejojNZPz0yKrrU1JVo_XWPvnb9PYoOF7ZC9tExdL4snQQTwa3u6ua1QfyKvC39FuERne.webp")
terrifier.image.attach(io: terrifier_img, filename: "terrifier.png")

conjuring = Movie.create!({
  title: 'The Conjuring',
  description: 'Based on true events, this spine-chiller tells the story of a New England family who begins having encounters with spirits in their farmhouse.',
  rating: 'R',
  content_length: '1h 51m'
})
conjuring_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABT6hydnRrNpma3QhIPqbbiJAHmMlokjzLqnKmDFlFxRDCrbKENUg2W_rTAX7mc8ade77j_-qsm1rc5vLss8JmHQtwf0N_1Fw.webp")
conjuring.image.attach(io: conjuring_img, filename: "conjuring.png")

final = Movie.create!({
  title: 'Final Destination 3',
  description: 'When a girl prevents her premonition of a deadly roller-coaster mishap from coming true, the survivors must face the consequences of cheating death.',
  rating: 'R',
  content_length: '1h 32m'
})
final_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABWIHsoY6FwKYBjzQfwy67uFbuBJHwT9kmIRsvKgLfoszlLuUUS4UfKlxsNFyDmhV65OX43xDDmFA8qHtxeLznu3tfZzc4k-h.webp")
final.image.attach(io: final_img, filename: "final.png")

american = Movie.create!({
  title: 'American Horror Story',
  description: 'This twisted Emmy-winning drama plays upon the power of supernatural fears and everyday horrors, exploring humankind\'s unsettling capacity for evil.',
  rating: 'TV-MA',
  content_length: '7 seasons'
})
american_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABc_pgETPFdFVDMDMzLi8XjX9RMHxSHq5BOxwyVEYTjmGbSKCOIkbA88niaK8vQycsJJUglxNAuBhPCpc7uzEaXyVTeGxcO0F.webp")
american.image.attach(io: american_img, filename: "american.png")

freddie = Movie.create!({
  title: 'Freddie vs. JSON',
  description: 'Fusing slasher franchises, this hybrid of horror pits nightmarish Freddy Krueger against serial killer Jason Voorhees in the ultimate showdown.',
  rating: 'R',
  content_length: '1h 35m'
})
freddie_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABf-bNQsBJxHqCU1-4CeJcZlb2FQif9NFLAomB4uQTH2CGGtIpNBl1Jo7hcieZQthOtjevEIHR-s7ckrv7PMh9Xpo7YGNCFyL.webp")
freddie.image.attach(io: freddie_img, filename: "freddie.png")

texas = Movie.create!({
  title: 'Texas Chainsaw Massacre',
  description: 'The sole survivor of a 1973 killing spree breaks her silence to tell the story of what really happened on that grisly, unforgettable day.',
  rating: 'R',
  content_length: '1h 38m'
})
texas_img = open("https://s3-us-west-1.amazonaws.com/notflix-dev/movie_images/horror/images/AAAABfzVcTLrOQLa5cFTJwVC6ZZg29fA9KuF_qs1lwjzbIg4Wc_50LrBeoCOijhP2chwNvUK60IjaebwAqfsQosLWYUeoo9g0z9Y.webp")
texas.image.attach(io: texas_img, filename: "texas.png")

=end