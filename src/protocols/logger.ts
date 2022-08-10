import { Controller } from "./controller"

export interface IDataLogger {
    statusCode?: number
    type?: string
    message?: string,
    request?: any,
    response?: any
    date: Date
    success: boolean
    httpMethod?: string,
    url?: string
}

export interface ILogger {
    formateMiddleLog(data: IDataLogger): string,
    logging(message: string, success: boolean): void,
    formateControllerLog(controller: Controller, data: IDataLogger): string,
    log(data: IDataLogger, controller?: Controller): void
}