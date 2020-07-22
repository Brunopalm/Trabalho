exports.up = function(knex, Promise) {
 return Promise.all([
      knex.schema.createTable('peoples', function (table) {
      table.string('title').notNull()
      table.increments('id').primary()
      table.timestamps()
    }),
      knex.schema.createTable('administration', function (table) {
      table.increments('id').primary()
      table.integer('people_id').references('id').inTable('peoples')
      table.string('name').notNull()
      table.string('hall').notNull()
      table.string('description', 1000).notNull()
      table.string('imageUrl', 1000).notNull()
      table.timestamps()
    }),
      knex.schema.createTable('students', function (table) {
      table.increments('id').primary()
      table.integer('people_id').references('id').inTable('peoples')
      table.string('description', 1000)
      table.string('imageUrl', 1000).notNull()
      table.timestamps()
    }),
      knex.schema.createTable('teachers', function (table) {
      table.increments('id').primary()
      table.integer('people_id').references('id').inTable('peoples')
      table.string('description', 1000)
      table.string('imageUrl', 1000).notNull()
      table.timestamps()
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTableIfExists('peoples'),
      knex.schema.dropTableIfExists('teachers'),
      knex.schema.dropTableIfExists('administration'),
      knex.schema.dropTableIfExists('students')
    ])
};
