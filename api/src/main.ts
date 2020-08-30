import './config/IocConfig'

import { Connection } from 'typeorm'
import { TodoService } from './services/todo/TodoService';
import { lazyInject } from 'utils'
export default class Main {
	/**
	 *
	 * Main
	 *
	 */

	public static connection: Connection

	constructor(connection: Connection) {
		Main.connection = connection
		this.start()
	}


	@lazyInject('TodoService')
	private todoService!: TodoService

	public start() {
		this.todoService
			.getValues()
			.then(r => console.log(`TODOS: ${r}`))
	}
}
