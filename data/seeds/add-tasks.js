
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          task_description: 'Getting a higher refresh rate means quicker reactions',
          task_note: 'adjust mouse sensitivity also',
          task_complete: 'false',
          project_id: 1
        },
        { 
          task_description: 'Reduce graphics settings for higher FPS',
          task_note: 'aim for at least 144hz',
          task_complete: 'false',
          project_id: 1
        },       { 
          task_description: 'clean up PC first',
          task_note: 'make sure to prevent shorting of MB',
          task_complete: 'false',
          project_id: 2
        },       { 
          task_description: 'clean up desk',
          task_note: 'allow ample dry up time',
          task_complete: 'false',
          project_id: 2
        },
      ]);
    });
};
