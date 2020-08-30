import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as methodOverride from 'method-override'
import * as Agenda from 'agenda'

import 'reflect-metadata'
import './controllers'

import { interfaces } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import config, { AppConfig } from './lib/AppConfig'
import { Connection } from 'typeorm'
import { RegisterServices } from './services'
import { buildProviderModule } from 'inversify-binding-decorators'

export let connection: Connection = undefined

export const agenda = new Agenda({
	db: {
		address: config.MongoDB,
		options: {
			useUnifiedTopology: true,
			autoReconnect: false,
			reconnectTries: undefined,
			reconnectInterval: undefined
		}
	}
})

export async function load(
	app: express.Application,
	dbConnection: Connection
): Promise<void> {
	connection = dbConnection
	await agenda.start()

	return Promise.resolve()
}

export function create(
	iocContainer: interfaces.Container
): express.Application {
	RegisterServices(iocContainer)
	iocContainer.load(buildProviderModule())

	// Create the app
	const server = new InversifyExpressServer(iocContainer)
	server.setConfig(app => {
		app.use(bodyparser.urlencoded({ extended: true }))
		app.use(bodyparser.json())
		app.use(methodOverride())
	})
	return server.build()
}

export function start(
	app: express.Application,
	config: AppConfig.IRootConfig
): boolean {
	if (config.Port) {
		if (config.Host)
			app.listen(config.Port, config.Host, () =>
				console.log(
					`Server started http://${config.Host}${config.Port == 80 ? '' : ':'}${
						config.Port == 80 ? '' : config.Port
					}/`
				)
			)
		else
			app.listen(config.Port, () =>
				console.log(
					`Server started http://localhost${config.Port == 80 ? '' : ':'}${
						config.Port == 80 ? '' : config.Port
					}/`
				)
			)
	} else {
		console.warn(
			`Running config/${process.env.NODE_ENV}.json without Port number, skip launching the express server`
		)
		return false
	}
	return true
}
