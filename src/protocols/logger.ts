import { HttpClient, OptionsController } from "./options"

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
    log(data: IDataLogger, options?: OptionsController): void
    logHttpClient(httpClient: HttpClient, data: IDataLogger): void
    logAxiosRequest (url: string, token: string, params?: any, headers?: any, response?: any, functionName?: string, data?: any): void
    logAxiosRequestError (url: string,token: string, params?: any, headers?: any, response?: any, functionName?: string, error?: any): void
}