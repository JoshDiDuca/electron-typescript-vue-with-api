//#region IOC

import getDecorators from 'inversify-inject-decorators'
import { iocContainer } from 'lib/IocContainer'

export const { lazyInject } = getDecorators(iocContainer)

//#endregion IOC
