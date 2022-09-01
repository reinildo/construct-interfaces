import { RuntimeEvents } from "../events/RuntimeEvents";
import { ILayout } from "../layout/ILayout";
import { IAssetManager } from "../other-interfaces/IAssetManager";
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
  callFunction(name:string, ...params:any):any


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

  /**
   * A shorthand reference to the Touch script interface. This is only set if the Touch plugin is added to the project.
   */
  touch: ITouchObjectType

  /**
   * 
   * @param layoutNameOrIndex
   * End the current layout and switch to a new layout given by a case-insensitive string of its name, or its zero-based index in the project (which is the order layouts appear in the Project Bar with all folders expanded). Note the layout switch does not take place until the end of the current tick.
   */
  goToLayout(layoutNameOrIndex:string|number):void

  /**
   * An IAssetManager interface providing access to project assets like sound and music files or other project files, as well as audio decoding utilities.
   */
  assets: IAssetManager

  /**
   * An ILayout interface representing the current layout.
   */
  layout: ILayout

}



function teste(r:IRuntime){
  //r.
}

export { IRuntime }