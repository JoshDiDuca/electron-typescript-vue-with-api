import { inject } from 'inversify'
import {
	controller,
	interfaces,
	BaseHttpController,
	httpGet
} from 'inversify-express-utils'
import { TodoService } from 'services/todo/TodoService'

@controller('/todo')
export class TradesController extends BaseHttpController
	implements interfaces.Controller {
	constructor(
		@inject('TodoService') private todoService: TodoService
	) {
		super()
	}

	@httpGet('/getValues')
	public async getPreviousTrades(): Promise<any> {
		const trades = await this.todoService.getValues()
		return JSON.stringify(trades)
	}
	// @SuccessResponse('201', 'Created')
	// @Post()
	// public async createTest(@Body() requestBody: TestCreationRequest): Promise<void> {
	//     return Promise.resolve();
	// }
}
