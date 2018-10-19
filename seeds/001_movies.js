exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('movies').del()
      .then(function() {
        // Inserts seed entries
        return knex('movies').insert([{
            id: 1,
            Title: 'Star Wars: A New Hope',
            Director: 'George Lucas',
            Year: 1977,
            myRating: 5,
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/BlueHarvestPoster.jpg/200px-BlueHarvestPoster.jpg'
          },
          {
            id: 2,
            Title: 'Raiders of the Lost Ark',
            Director: 'Steven Spielberg',
            Year: 1981,
            myRating: 5,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            id: 3,
            Title: 'No Country for Old Men',
            Director: 'Ethan Cohen',
            Year: 2007,
            myRating: 1,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg'
          },
          {
            id: 4,
            Title: 'The Revenant',
            Director: 'Alejandro G. Inarritu',
            Year: 2015,
            myRating: 2,
            poster: 'https://m.media-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            id: 5,
            Title: 'Butch Cassidy and the Sundance Kid',
            Director: 'George Roy Hill',
            Year: 1969,
            myRating: 5,
            poster: 'https://m.media-amazon.com/images/M/MV5BMTkyMTM2NDk5Nl5BMl5BanBnXkFtZTgwNzY1NzEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
          }
        ]);
      })
      .then(() => {
          // After SQL INSERT, update the autoincrementing id counter
          return knex.raw("SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));")
        })
      }
