import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm'

@Entity({ name: 'logs' })
export class LogEntry {
	@ObjectIdColumn() Id?: ObjectID
	@Column() Type: LogLevel
	@Column() Message: string
	@Column() StackTrace: string
}

export enum LogLevel {
	Debug,
	Information,
	Warn,
	Error
}