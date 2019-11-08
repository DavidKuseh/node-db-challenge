
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments();
      table.text('project_name', 255)
      .unique()
      .notNullable();
      table.text('project_description');
      table.boolean('project_complete')
        .default('false')
  })
  .createTable('resources', table => {
      table.increments();
      table.text('resource_name', 255)
      .unique()
      .notNullable();
      table.text('resource_description')
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('tasks', table => {
      table.increments();
      table.text('task_description')
      .unique()
      .notNullable()
      table.text('task_note')
      table.boolean('task_complete')
      .default('false')
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('projects_resources', table => {
      table.increments();
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')  
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')  
};
