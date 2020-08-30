import * as app from './app'
import config from './lib/AppConfig'
import { iocContainer } from './lib/IocContainer'
import { createConnection } from 'typeorm'

export const application = app.create(iocContainer)

createConnection(config.ORM).then(async connection => {
	app
		.load(application, connection)
		.then(() => {
			if (!app.start(application, config)) process.exit(0)
		})
		.catch(e => {
			console.error('[APP] error', e)
			process.exit(1)
		})
})
