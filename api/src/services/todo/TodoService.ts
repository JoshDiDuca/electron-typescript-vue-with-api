import { injectable, inject } from 'inversify'
import { BaseService } from '../base/BaseService'
import config from 'lib/AppConfig'
import { getManager } from 'typeorm'
import { LogService } from 'services/log/LogService'
import { Todo } from '../../entity/todo/Todo';

export interface ITodoService {
	getValues(): Promise<Array<any>>;
}

@injectable()
export class TodoService extends BaseService
	implements ITodoService {
	/**
	 *
	 * TradesService
	 *
	 */

	public constructor(@inject('LogService') protected logService: LogService) {
		super(logService)
	}

	public async getValues() {
		const marketRepository = getManager().getRepository(Todo)
		var newItem: Todo = { Name : 'Test', Description : 'Description', Time : new Date()  };
		marketRepository.create(newItem);
		return [];
	}
}
