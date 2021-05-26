import { IObjectClass } from './IObjectClass'
interface IInstance extends IObjectClass {
  addEventListener(type:string, callback:Function):void
  removeEventListener(type:string, callback:Function):void
}

export { IInstance }