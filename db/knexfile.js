// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_practice_one',
      user:     'postgres',
      password: '@Ravind95'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'demo_knex'
    }
  },

};
