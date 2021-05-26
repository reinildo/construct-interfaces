import { RuntimeEvents } from "../events/RuntimeEvents";

export interface IRuntime {
  /**
   * Add or remove a callback function for an event. See Runtime events above for the available events.
   * @param eventName @type {RuntimeEvents} - a RuntimeEvents string
   * @param callback @type {Function} - a callback function
   */
  addEventListener(eventName:RuntimeEvents, callback:Function):void
  removeEventListener(eventName:RuntimeEvents, callback:Function):void

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
}

function teste(r:IRuntime){
  r.
}