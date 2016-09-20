exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert([
      {first_name: 'Elana', last_name: 'Kopelevich', avatar: 'http://www.iconshock.com/img_vista/IPHONE/communications/jpg/dog_icon.jpg', bio: 'Elana is cool.'},
      {first_name: 'Craig', last_name: 'Quincy', avatar: 'https://d13yacurqjgara.cloudfront.net/users/9631/screenshots/837196/evagalesloot_skwirrol_icon_drb.jpg', bio: 'Craig is rad.'},
      {first_name: 'Matt', last_name: 'Bouchard', avatar: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/cat-icon.png', bio: 'Matt is neat.'},
      {first_name: 'James', last_name: 'Freeman', avatar: 'https://cdn2.iconfinder.com/data/icons/bird-icons/512/Bird_Icons_5-128.png', bio: 'James is smart.'},
    ]),
  ])
}
