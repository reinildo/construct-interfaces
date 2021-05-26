import { IInstance } from '../objects/IInstance'
import { IObjectClass } from './IObjectClass'
interface IAddChildOptions {
  /**
   * move the child with this instance's X position
   */
  transformX: boolean,
  /**
   * move the child with this instance's Y position
   */
  transformY: boolean,
  /**
   * automatically destroy the child if this instance is destroyed
   */
  destroyWithParent: boolean
}

interface IWordInstance extends IInstance{
  /**
   * The position of this instance, in layout co-ordinates.
   */
  x:number
  y:number

  /**
  * The size of this instance, in layout co-ordinates.
  */
  width:number
  height:number

  /**
   * The opacity of the instance, as a floating point number in the range [0, 1], where 0 is fully transparent and 1 is fully opaque.
   */
  opacity:number


  /**
   * Add another world instance given by an IWorldInstance as a child of this instance in the scene graph hierarchy. This instance becomes its parent in the scene graph hierarchy. The child will move, scale and rotate with this instance according to the provided options specified in the object opts, which supports the following properties:

   * @param wi 
   * @param opts  - an object containing the following properties:
   * transformX: move the child with this instance's X position
   * transformY: move the child with this instance's Y position
   * transformWidth: scale the child with this instance's width
   * transformHeight: scale the child with this instance's height
   * transformAngle: rotate the child with this instance's angle
   * transformZElevation: move the child with this instance's Z elevation
   * destroyWithParent: automatically destroy the child if this instance is destroyed
   */
  addChild(wi:IWordInstance, opts:IAddChildOptions):void
}

export {IWordInstance}