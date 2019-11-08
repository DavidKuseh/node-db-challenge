const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getProjectTasks
};

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
    .where({id})
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function getProjectTasks(projectId) {
    return db('projects as p')
    .where('p.id', '=', projectId)
    .join('tasks as t', 't.projects_id', '=', 'p.id')
    .select('p.project_name', "p.project_description", 't.task_description')
}
