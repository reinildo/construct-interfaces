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

}

export { ISpriteInstance }