const express = require('express')

const router = express.Router()

const Projects = require('./project-model')

router.get('/', (req,res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'could not get projects', errMessage: err})
        })
    })

router.get('/:id',(req,res) => {
    Projects.getProjectById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get project with id', errMessage: err})
    })
})

router.get('/:id/tasks',(req,res) => {
    Projects.getProjectTasks(req.params.id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get project with id', errMessage: err})
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get add project', errMessage: err})
    })
})

module.exports = router