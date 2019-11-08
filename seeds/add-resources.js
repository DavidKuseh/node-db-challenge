
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { 
          resource_name: 'Dell monitor',
          resource_description: '144Hz G-sync 1ms',
          project_id: 1
        },
        { 
          resource_name: 'air can',
          resource_description: 'compressed air can for getting rid of dust',
          project_id: 2
      },
      ]);
    });
};
