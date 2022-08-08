const router = require('express').Router()

const controller = require('../controllers')

router.post('/login', controller.login)

router.post('/register', controller.register)

// router.get('/dashboard',controller.dashboard)

router.get('/add', controller.add)

router.delete('/delete' , controller.delete)

router.delete('/deleteAll' , controller.deleteAll)

router.put('/update', controller.update)

module.exports = router



