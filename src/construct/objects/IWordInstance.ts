import { ILayer } from '../layout/ILayer'
import { ILayout } from '../layout/ILayout'
import { IInstance } from '../objects/IInstance'
interface IAddChildOptions {
  /**
   * move the child with this instance's X position
   */
  transformX?: boolean,
  /**
   * move the child with this instance's Y position
   */
  transformY?: boolean,

  /**
   * scale the child with this instance's width
   */
  transformWidth?: boolean

  /**
   * scale the child with this instance's height
   */
  transformHeight?: boolean

  /**
   * rotate the child with this instance's angle
   */
   transformAngle?: boolean

  /**
   * move the child with this instance's Z elevation
   */
  transformZElevation?: boolean

  /**
   * automatically destroy the child if this instance is destroyed
   */
  destroyWithParent?: boolean


}

interface IWordInstance extends IInstance{
  /**
   * An ILayout interface representing the layout the instance is on.
   */
  layout:ILayout

  /**
   * An ILayer interface representing the layer the instance is on.
   */  
  layer:ILayer

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
   * The angle of the instance in radians. If this is changed, angleDegrees updates accordingly.
   */
  angle:number

  /**
   * The angle of the instance in degrees. If this is changed, angle updates accordingly.
   */
  angleDegrees:number

  /**
   * A boolean indicating whether the instance is visible in the layout.
   */
  isVisible:boolean

  /**
   * This is a personal, not a construct thing
   * its an object to keep anything you lyke as key:value
   */
  data:{[key:string]:any}

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

  /**
   * An array with 3 elements specifying the red, green and blue color filter of the instance, with color values as floats in the 0-1 range.
   */
  colorRgb:number[]

  /**
   * Move the instance to the top or the bottom of its current layer in the Z order.
   */
  moveToTop():void
  moveToBottom():void

  /**
   * Test if this instance overlaps another world instance given by an IWorldInstance, returning true if they overlap, else false. This uses the object's collision polygons if any. If either instance has collisions disabled, this will always return false.
   * @param wi the object to test
   */
  testOverlap(wi:IWordInstance):boolean

  /**
   * 
   * @param index 
   * Of the children that have been added to this instance, return the child instance at the given zero-based index. If the index is out of bounds, returns null.
   */
  getChildAt(index:number):void

  /**
   * A generator method that can be used to iterate all the instance's added children.
   */
  children():any


}

export {IWordInstance}