import { RuntimeEvents } from "../events/RuntimeEvents";
import { ITouchObjectType } from "../plugins/ITouchObjectType";

interface IRuntime {
  /**
   * Add or remove a callback function for an event. See Runtime events above for the available events.
   * @param eventName @type {RuntimeEvents} - a RuntimeEvents string
   * @param callback @type {Function} - a callback function
   */
  addEventListener(eventName:RuntimeEvents, callback:Function):void
  removeEventListener(eventName:RuntimeEvents, callback:Function):void

  /**
   * Call a function in an event sheet, by a case-insensitive string of its name. Each parameter added after the name is passed to the function. There must be at least as many parameters provided as the function uses, although any additional parameters will be ignored. If the function has a return value, it will be returned from this method, else it returns null.
   * @param name - The function name to call
   * @param params 
   */
  callFunction(name:string, ...params:any):void


  /**
   * Return the value of delta-time, i.e. the time since the last frame, in seconds.
   */
  dt: number

  /**
   * Return the in-game time in seconds, which is affected by the time scale. This is equivalent to the time system expression.
   */
  gameTime: number

  /**
   * An object with a property for each object class in the project. For example if the project has an object named Sprite, then runtime.objects.Sprite will refer to the IObjectClass interface for Sprite.
   */

  objects: {[key: string]: any}

  /**
   * An object with a property for each global variable on an event sheet in the project. For example if the project has a global variable on an event sheet named Score, then runtime.globalVars.Score provides access to the global variable from script.
   */
  globalVars: {[key: string]: any}

  touch: ITouchObjectType
}



function teste(r:IRuntime){
  //r.
}

export { IRuntime }