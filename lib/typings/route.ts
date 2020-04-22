import { Req } from './req';
import { Res } from './res';
import Router from '../router';
// http method that currently supported
export type HttpMethod = 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
export type Middleware = (req: Req, res: Res) => void | Promise<any>;
export type RouterParam = string | Middleware | Router;
export interface Route {
  [key: string]: {
    params: string[] | null;
    handlers: Middleware[];
  };
}
export type Routes = {
  [key in HttpMethod]: Route;
};
