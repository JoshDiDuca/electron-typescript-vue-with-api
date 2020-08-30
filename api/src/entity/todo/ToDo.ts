import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'todo' })
export class ToDo {
	@ObjectIdColumn() Id?: ObjectID
	@Column() Name!: string
	@Column() Description!: string
	@Column() Time!: Date
}