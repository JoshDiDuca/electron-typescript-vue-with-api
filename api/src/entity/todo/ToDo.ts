import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'todo', database : 'todo' })
export class Todo {
	@ObjectIdColumn() Id?: ObjectID
	@Column() Name!: string
	@Column() Description!: string
	@Column() Time!: Date
}