import { ISpriteInstance } from '../plugins/ISpriteInstance'
import { IAnimation } from './IAnimation'
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

  /**
   * A reference to a IAnimation script interface representing the current animation, which can be used to access additional details such as the frames in the animation.
   */
  animation: IAnimation

  instVars: {[key:string]:string | number}

  /**
   * If the object has any behaviors, they can be accessed by named properties under this property. For example if an object has a behavior named Bullet, it can be accessed using instance.behaviors.Bullet. Each behavior has its own properties and methods, which can be found in the Behavior interfaces reference section. Note if the object has no behaviors, the instance won't have a behaviors property at all.
   */
  behaviors?:any

  /**
   * The unique ID of this instance, as a number. Note instances can be looked up by their UID using the runtime getInstanceByUid() method.
   */
  uid:number
  
  /**
   * Destroy the instance, removing it and releasing any memory associated with it.
   */
  destroy():void

  /**
   * Return an array of IInstance (or derivatives) representing other instances in the same container as this instance. This excludes the instance the method is called on.
   */
  getOtherContainerInstances(): IInstance[]

  /**
   * Iterates over IInstance (or derivatives) representing other instances in the same container as this instance. This excludes the instance the method is called on.
   */
  otherContainerInstances(): IterableIterator<IInstance>


  /**
   * The IObjectClass interface for this instance's object type.
   * This is named objectType and not objectClass because it always refers to an object type, and never a family.
   */
  objectType:IObjectClass
}

export { IInstance, InstanceEvents }