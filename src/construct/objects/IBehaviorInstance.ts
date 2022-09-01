import { IRuntime } from '../runtime/IRuntime'
import { IBehavior } from './IBehavior'
import { IInstance } from './IInstance'
import { IObjectClass } from './IObjectClass'

interface IBehaviorInstance extends IObjectClass {

  /**
   * Add or remove an event handler for a particular type of event fired by an addon's script interface. For information on which events are fired by specific addons, see the documentation on each addon's script interfaces.
   * @param type 
   * @param callback 
   */
  addEventListener(type:string, callback:Function):void
  removeEventListener(type:string, callback:Function):void

  /**
   * 
   * @param e an C3.Event
   * Dispatch an event, firing any handler functions that have been added for the event type. You can use new C3.Event(eventName, isCancellable) to create an event object that can be dispatched (e.g. new C3.Event("arrived", true)), and add any extra properties relevant to your event to that object. This can also be used by the addon SDK to cause your addon to fire an event in the script interface, e.g.:
   const e = new C3.Event("arrived", true);
   this.GetScriptInterface().dispatchEvent(e);
   */
  dispatchEvent(e:any):void

  /**
   * A reference to the IInstance representing the object instance this behavior instance is affecting.
   */
  instance: IInstance

  /**
   * A reference to the IBehavior representing the kind of behavior, e.g. Solid or Physics.
   */
  behavior: IBehavior

  /**
   * A reference back to the IRuntime interface.
   */
  runtime:IRuntime
  
}

export { IBehaviorInstance }