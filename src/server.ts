import http from 'http'
import express from 'express'
import logging from './config/logging'
import config from './config/config'

// routes
import cekserver from './routes/cek'
import DokterRoutes from './routes/dokter'
import UserRoutes from './routes/user'

const NAMESPACE = 'SERVER'
const router = express()



/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`)
    })

    next()
})

/** Parse the body of the request */
router.use(express.json())
router.use(express.urlencoded({ extended: true }))


/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }

    next()
})

/** Routes go here */
router.use('/server', cekserver)
router.use('/api/dokter', DokterRoutes)
router.use('/api/user', UserRoutes)


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found')

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server runs at ${config.server.host}:${config.server.port}`))
