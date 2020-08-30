/* eslint-disable no-console */
import { injectable } from 'inversify'
import { LogEntry, LogLevel } from 'entity/log/LogEntry'
import { getManager } from 'typeorm'

export interface ILogService {
	log(message: LogEntry): Promise<boolean>;
}

@injectable()
export class LogService implements ILogService {
	/**
	 *
	 * TradesService
	 *
	 */

	public async log(message: LogEntry): Promise<boolean> {
		try {
			if (message.Type !== LogLevel.Debug) {
				const loggingRepository = getManager().getRepository(LogEntry)
				loggingRepository.save(message)
			} else {
				console.log(message)
			}
			return true
		} catch (ex) {
			console.log(`Failed to log: [${message}], exception: [${ex}]`)
			return false
		}
	}
}
