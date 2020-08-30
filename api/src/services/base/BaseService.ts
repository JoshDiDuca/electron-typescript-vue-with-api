import * as ccxt from 'ccxt'
import { injectable, inject } from 'inversify'
import config from 'lib/AppConfig'
import { LogService } from 'services/log/LogService'

@injectable()
export class BaseService {
	/**
	 *
	 * TradesService
	 *
	 */

	constructor(@inject('LogService') protected logService: LogService) {
	}
}