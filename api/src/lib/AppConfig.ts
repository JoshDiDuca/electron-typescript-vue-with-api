import * as c from 'config'

export namespace AppConfig {
	export interface IRootConfig extends c.IConfig {
		Debug?: boolean
		Port?: number
		Host?: string

		MongoDB?: string

		ORM?: any
	}
}

const config: AppConfig.IRootConfig = <AppConfig.IRootConfig>c
export default config
