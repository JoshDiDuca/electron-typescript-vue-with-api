import { interfaces } from 'inversify'

import {
	TodoService,
	ITodoService
} from './todo/TodoService'
import { LogService, ILogService } from './log/LogService'

export function RegisterServices(iocContainer: interfaces.Container): void {
	iocContainer.bind<ILogService>('LogService').to(LogService)

	iocContainer.bind<ITodoService>('TradesService').to(TodoService)
}
