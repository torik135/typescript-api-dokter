import express from 'express'
import userController from '../controllers/user'
import dokterController from '../controllers/dokter'
import extractJWT from '../middlewares/extractJWT'

const NAMESPACE = 'CEK SERVER - ROUTES'

const router = express()

router.get('/validate', extractJWT, userController.validateToken)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/get/user', userController.getAllUser)
router.post('/create/janji', extractJWT, userController.Janji)
router.delete('/delete/janji', extractJWT, userController.deleteJanji)

router.post('/detail/dokter', dokterController.getDokter)
router.post('/cari/dokter', dokterController.cariDokter)
router.get('/get/dokter', dokterController.getAllDokter)


export = router