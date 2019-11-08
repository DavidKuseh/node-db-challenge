
const express = require('express')

const router = express.Router()

const Resources = require('./resource-model')

router.get('/', (req,res) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get resources', errMessage: err})
    })
})

router.get('/:id',(req,res) => {
    Resources.getResourceById(req.params.id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get resource with id', errMessage: err})
    })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
    .then(resource => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'could not get add resource', errMessage: err})
    })
})

module.exports = router