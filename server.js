
const express = require('express')
const server = express()

const projectsRouter = require('./projects/project-router')
const resourcesRouter = require('./resources/resource-router')
const tasksRouter = require('./tasks/task-router')


server.use(express.json())

// server.get('/', (req, res) => {
//     res.send('server is running')
// })

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)


module.exports = server