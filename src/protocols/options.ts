export interface OptionsController<T = any> {
    objetive: string
    type: string
  }
  export interface  HttpClient {
    method: METHOD,
    url: string,
    headers?: any,
    params?: any,
    body?: any,
  }

export enum METHOD {
    POST= 'post',
    PUT = 'put',
    GET = 'get',
    DELETE = 'delete'
}