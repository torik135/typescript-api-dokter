import mysql from 'mysql'
import config from './config'


const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
	const connection = mysql.createConnection({
		host: config.mysql.host,
		port: 3306,
		user: config.mysql.user,
		password: config.mysql.pass,
		database: config.mysql.db
	})

	connection.connect((error) => {
		if (error) {
			reject(error)
			return
		}

		resolve(connection)
	})
})

const Query = async <T>(connection: mysql.Connection, query: string) => new Promise<T>((resolve, reject) => {
	connection.query(query, connection, (error, result) => {
		if (error) {
			reject(error)
			return
		}

		resolve(result)
	})
})

export { Connect, Query }