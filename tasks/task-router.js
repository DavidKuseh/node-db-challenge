const express = require('express')

const router = express.Router()

const Tasks = require('./task-model')

router.get('/', (req,res) => {
    Tasks.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({message: 'could not get tasks', errMessage: err})
        })
    })

router.get('/:id',(req,res) => {
    Tasks.getTaskById(req.params.id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get task with id', errMessage: err})
    })
}) 

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(task => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get add task', errMessage: err})
    })
})

module.exports = router