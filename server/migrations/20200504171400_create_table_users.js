
exports.up = function (knex, Promise) {
 return Promise.all([
		  knex.schema.createTable('users', table => {
	      table.increments('id').primary()
	      table.string('name').notNull()
	      table.string('email').notNull().unique()
	      table.string('password').notNull()
	      table.boolean('admin').notNull()
	    })
  ])

};

exports.down = function (knex, Promise) {
 return Promise.all([
   knex.schema.dropTable('users')
 ])
};
