const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// const verifyJWT = require("../middlewares/verifyJWT")
// const verifySupervisor = require("../middlewares/verifySupervisor")

// router.use(verifyJWT)
// router.use(verifySupervisor)

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.post('/pair', userController.createUsersPair)

module.exports = router;