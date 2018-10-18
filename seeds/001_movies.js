
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, Title: 'Star Wars: A New Hope', Director: 'George Lucas', Year: 1977, My Rating: 5, poster:''},
        {id: 2, Title: 'Raiders of the Lost Ark', Director: 'Steven Spielberg', Year:1981, My Rating:5},
        {id: 3, Title: 'No Country for Old Men', Director: 'Ethan Cohen', Year:2007, My Rating:1},
        {id: 4, Title: 'The Revenant', Director: 'Alejandro G. Inarritu', Year:2015, My Rating:2},
        {id: 5, Title: 'Butch Cassidy and the Sundance Kid', Director: 'George Roy Hill', Year:1969, My Rating:5}
      ]);
    });
};
