import { IWordInstance } from "../objects/IWordInstance";

interface ISpriteInstance extends IWordInstance {
  /**
   * Read-only numbers indicating the size of the current animation frame's source image, in pixels.
   */
  imageWidth: number
  imageHeight: number

  /**
   * The zero-based index of the current animation frame.
   */
  animationFrame: number

  /**
   * Return the number of image points on the current animation frame.
   */
   getImagePointCount():number

  /**
   * 
   * @param nameOrIndex 
   * Return the location of an image point on the current animation frame in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. The getImagePoint variant returns [x, y].
   */
  getImagePointX(nameOrIndex:string | number):number
  getImagePointY(nameOrIndex: string | number):number
  getImagePoint(nameOrIndex: string | number):number[]

  /**
   * 
   * @param name 
   * @param from beginning, current-frame
   * Set the current animation by a string of its name (case-insensitive). from can be set to either "current-frame" to switch to the same frame index in the new animation, or "beginning" to rewind to the first frame.
   */
  setAnimation(name:string, from:string):void

}

export { ISpriteInstance }