import { Request, Response, NextFunction } from 'express'
import logging from '../config/logging'
import { Connect, Query } from '../config/mysql'

const NAMESPACE = "DOKTER - CONTROLLER"

const getAllDokter = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, 'GET ALL DOKTER CONTROLLER')

	let query = "SELECT * FROM tb_dokter"


	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results) => {
					return res.status(200).json({
						results
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

// const getDokter = (id: string, req: Request, res: Response, next: NextFunction) => {
// 	logging.info(NAMESPACE, 'GET ALL DOKTER CONTROLLER')

// 	// let id = req.body.id

// 	// console.log(id)
// 	// console.log(typeof (id))

// 	let query = `SELECT * FROM tb_dokter WHERE id = ${id}`


// 	Connect()
// 		.then((connection) => {
// 			Query(connection, query)
// 				.then((results) => {
// 					return res.status(200).json({
// 						results
// 					})
// 				})
// 				.catch((error) => {
// 					logging.error(NAMESPACE, error.message, error)

// 					return res.status(500).json({
// 						message: error.message,
// 						error
// 					})
// 				})
// 				.finally(() => {
// 					connection.end()
// 				})
// 		})
// 		.catch((error) => {
// 			logging.error(NAMESPACE, error.message, error)

// 			return res.status(500).json({
// 				message: error.message,
// 				error
// 			})
// 		})
// 
// 
// }

const createDokter = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, 'CREATE DOKTER CONTROLLER')

	let { nama, spesialis } = req.body

	let query = `INSERT INTO tb_dokter (nama, spesialis) VALUES ("${nama}", "${spesialis}")`


	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((result) => {
					return res.status(200).json({
						result
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
	getAllDokter,
	// getDokter, 
	createDokter
}