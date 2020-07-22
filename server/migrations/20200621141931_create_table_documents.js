exports.up = function(knex, Promise) {
 return Promise.all([
        knex.schema.createTable('documents', table => {
        table.increments('id').primary()
        table.string('title').notNull()
        table.specificType('anexos', 'text ARRAY').notNull()
        table.binary('description')
	    table.timestamps()
    })
  ])
};

exports.down = function(knex, Promise) {
 return Promise.all([
  	knex.schema.dropTableIfExists('documents')
 ])
};
