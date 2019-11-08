
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'Get a better K/D in MW',
          project_description: 'Acquire a 144Hz refresh rate monitor',
          project_complete: 'false'
       },
        {
          project_name: 'Clean my setup',
          project_description: 'Dust PC, wipe desk, sweep',
          project_complete: 'false'
        },
      ]);
    });
};
