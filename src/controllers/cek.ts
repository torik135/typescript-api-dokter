import {Request, Response, NextFunction} from 'express'
import logging from '../config/logging'


const NAMESPACE = "CEK SERVER - CONTROLLER"

const cekserver = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, 'CEK SERVER')

	return res.status(200).json({
		message: 'cek server berhasil!'
	})
}

export default {cekserver}