import { Logger } from "./main/logger";
import { Controller } from "./protocols/controller";
import { IDataLogger } from "./protocols/logger";

const logger = new Logger();

export * from "./protocols/controller"
export * from "./protocols/logger"
export const logController = (data: IDataLogger, controller: Controller) => logger.log(data, controller)
export const logMiddleware = (data: IDataLogger) => logger.log(data)