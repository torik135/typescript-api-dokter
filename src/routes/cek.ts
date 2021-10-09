import express from 'express'
import controller from '../controllers/cek'

const NAMESPACE = 'CEK SERVER - ROUTES'

const router = express()

router.get('/cek', controller.cekserver)

export = router