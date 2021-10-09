import { Request, Response, NextFunction } from 'express'
import logging from '../config/logging'
import bcryptjs from 'bcryptjs'
import signJWT from '../functions/signJWT'
import { Connect, Query } from '../config/mysql'
import IUser from '../interfaces/user'
import IMySQLResult from '../interfaces/results'
import IJanji from '../interfaces/janji'

const NAMESPACE = "USER - CONTROLLER"

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'user token validated')

    return res.status(200).json({
        message: 'auth berhasil'
    })
}

const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body

    bcryptjs.hash(password, 3, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            })
        }

        // insert 
        let query = `INSERT INTO tb_user (username, password) VALUES ("${username}", "${hash}")`

        Connect()
            .then(connection => {
                Query<IMySQLResult>(connection, query)
                    .then((result) => {
                        logging.info(NAMESPACE, `user ${result.insertId} telah dibuat`)

                        return res.status(201).json(result)
                    })
                    .catch(error => {
                        logging.error(NAMESPACE, error.message, error)

                        return res.status(500).json({
                            message: error.message,
                            error
                        })
                    })
            })
            .catch(error => {
                logging.error(NAMESPACE, error.message, error)

                return res.status(500).json({
                    message: error.message,
                    error
                })
            })
    })
}

const login = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body
    console.log(typeof (username));


    let query = `SELECT * FROM tb_user WHERE username = '${username}'`

    Connect()
        .then((connection) => {
            Query<IUser[]>(connection, query)
                .then((users) => {
                    bcryptjs.compare(password, users[0].password, (error, result) => {
                        if (error) {
                            return res.status(401).json({
                                message: 'pass tidak sama'
                            })
                        } else if (result) {
                            signJWT(users[0], (_error, token) => {
                                if (_error) {
                                    return res.status(401).json({
                                        message: `Sign JWT FAILED! ${_error.message}`,
                                        error: _error
                                    })
                                } else if (token) {
                                    return res.status(200).json({
                                        message: 'Login & Sign JWT Sukses!',
                                        token,
                                        user: users[0]
                                    })
                                }
                            })
                        }
                    })
                })
                .catch(error => {
                    logging.error(NAMESPACE, error.message, error)

                    return res.status(500).json({
                        message: error.message,
                        error
                    })
                })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })

}

const getAllUser = (req: Request, res: Response, next: NextFunction) => {

    let query = 'SELECT id, username from tb_user'

    Connect()
        .then(connection => {
            Query<IUser[]>(connection, query)
                .then((users) => {
                    return res.status(200).json({
                        users,
                        count: users.length
                    })
                })
                .catch(error => {
                    logging.error(NAMESPACE, error.message, error)

                    return res.status(500).json({
                        message: error.message,
                        error
                    })
                })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const Janji = (req: Request, res: Response, next: NextFunction) => {
    let { nama_user, nama_dokter, tgl } = req.body

    let query = `INSERT INTO tb_janji (nama_user, nama_dokter, tgl) VALUES ("${nama_user}", "${nama_dokter}", "${tgl}")`

    Connect()
        .then((connection) => {
            Query<IMySQLResult>(connection, query)
                .then((result) => {
                    return res.status(200).json({
                        message: `Janji ${result.insertId} telah dibuat`,
                        result,
                    })
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error)

                    return res.status(500).json({
                        message: error.message,
                        error
                    })
                })
                .finally(() => {
                    connection.end()
                })
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default {
    validateToken, register, login, getAllUser, Janji
}