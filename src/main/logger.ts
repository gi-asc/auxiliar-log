import { IDataLogger, ILogger } from "../protocols/logger";
import logger from  '../config/index'
import clc from 'cli-color'
import { OptionsController } from "../protocols/options";

export class Logger implements ILogger{

    private formateDate(date: Date): string {
        return date.getFullYear() + "/" + ((date.getMonth() + 1)) + "/" + (date.getDate()) + " às " + (date.getHours()) + ":" + (date.getMinutes()) + ":" + (date.getSeconds())
    }
    private formateMiddleLog(data: IDataLogger): string {
        let success = clc.green(data.success)
        if(!data.success) {
            success = clc.red(data.success)
        }

        const message = [
            clc.blue(this.formateDate(data.date)),
            clc.yellow(data.httpMethod),
            clc.white(data.message),
            clc.cyan(data.statusCode),
            success,
            clc.cyanBright(data.type),
            clc.whiteBright(data.url),
          ].join(" ");
        return message
    }

    private logging(message: string, success: boolean): void {
        if(!success){
            return logger.error(message)
        }
        return logger.info(message)
    }

    private formateControllerLog(options: OptionsController, data: IDataLogger): string {
        const type = clc.magenta.bold(data.httpMethod)
        const date = clc.white.bold(this.formateDate(data.date))
        const objetive = clc.yellow.bold(options.objetive)
        const params = clc.yellowBright.bold(data.request ? JSON.stringify(data.request) : "Não foram enviados paramêtros")
        const proccess = clc.magenta.bold(options.type.toUpperCase())
        const response = clc.blue.bold(JSON.stringify(data.response))
        const success = ` com sucesso. O serviço enviou a seguinte resposta: ${response}`
        const errors = `, que retornou o seguinte erro: ${clc.white("ERROR CODE:")} ${clc.red.bold(data.statusCode)}, ${clc.white("ERROR MESSAGE:")} ${clc.red.bold(JSON.stringify(data.response))}`
        const returns = `foram processados pelo serviço ${proccess}${data.success ? success : errors}`
        return `Requisição do tipo ${type} realizada na data de ${date}, tem como objetivo ${objetive}. Foram enviados os seguintes dados: ${params}, que ${returns}`
    }

    log(data: IDataLogger, options?: OptionsController): void {
        let message: string
        if (options) {
            message = this.formateControllerLog(options, data)
        } else {
            message = this.formateMiddleLog(data)
        }
        this.logging(message, data.success)
    }
}
