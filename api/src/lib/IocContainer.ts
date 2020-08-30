import { Container, interfaces } from 'inversify'
import { fluentProvide } from "inversify-binding-decorators"

export const iocContainer: interfaces.Container = <interfaces.Container>(
	new Container({ skipBaseClassChecks: true })
)