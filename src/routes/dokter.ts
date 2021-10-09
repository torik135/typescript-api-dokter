import express from 'express'
import controller from '../controllers/dokter'

const NAMESPACE = 'CEK SERVER - ROUTES'

const router = express()

router.get('/get/dokter', controller.getAllDokter)
// router.get('/detail/dokter/:id', controller.getDokter)
router.post('/create/dokter', controller.createDokter)

export = router