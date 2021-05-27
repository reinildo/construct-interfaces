import { IObjectClass } from './IObjectClass'

interface InstanceEvents {
  destroy: 'destroy'
}


interface IInstance extends IObjectClass {
  addEventListener(type:string, callback:Function):void
  removeEventListener(type:string, callback:Function):void

  instVars: {[key:string]:string | number}

  /**
   * Destroy the instance, removing it and releasing any memory associated with it.
   */
  destroy():void
}

export { IInstance, InstanceEvents }