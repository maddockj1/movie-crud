exports.up = function(knex, Promise) {
return knex.schema.createTable('movies', function(table) {
 // TABLE COLUMN DEFINITIONS HERE
 table.increments()
 table.string('Title').notNullable().defaultTo('')
 table.string('Director').notNullable().defaultTo('')
 table.integer('Year').notNullable().defaultTo(0)
 table.integer('myRating').notNullable().defaultTo(0)
 table.string('poster')
 table.timestamps(true, true)
 // OR
 // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
 // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
})
}
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('movies')
}
