import { IObjectClass } from './IObjectClass'

interface InstanceEvents {
  destroy: 'destroy'
}


interface IInstance extends IObjectClass {

  /**
   * Add or remove an event handler for a particular type of event fired by an addon's script interface. For information on which events are fired by specific addons, see the documentation on each addon's script interfaces.
   * @param type 
   * @param callback 
   */
  addEventListener(type:string, callback:Function):void
  removeEventListener(type:string, callback:Function):void

  instVars: {[key:string]:string | number}

  /**
   * Destroy the instance, removing it and releasing any memory associated with it.
   */
  destroy():void

  /**
   * The IObjectClass interface for this instance's object type.
   * This is named objectType and not objectClass because it always refers to an object type, and never a family.
   */
  objectType:IObjectClass
}

export { IInstance, InstanceEvents }