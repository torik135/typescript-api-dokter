import express from 'express'
import controller from '../controllers/user'
import extractJWT from '../middlewares/extractJWT'

const NAMESPACE = 'CEK SERVER - ROUTES'

const router = express()

router.get('/validate', extractJWT, controller.validateToken)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/get/all', controller.getAllUser)

export = router