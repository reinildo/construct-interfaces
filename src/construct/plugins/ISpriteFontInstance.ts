import { IWordInstance } from '../objects/IWordInstance'


interface ISpriteFontInstance extends IWordInstance {
  /**
   * The string currently displayed by the Sprite Font object.
   */
  text:string

  /**
   * Set the text over time by starting with an empty string and gradually adding characters until the full text of str is written out, over a duration specified in seconds. Note modifying the text property while text is being written out will cancel the effect.
   * @param str - text to do the effect
   * @param duration - effect duration in seconds
   */
  typewriterText(str:string, duration:number):void

  /**
   * If text is being written out with the typewriterText() method, force it to finish immediately.
   */
  typewriterFinish:Function

  /**
   * The current text scale, defaulting to 1 for normal scale.
   */
  characterScale:number

  /**
   * The extra space in pixels to add horizontally between characters.
   */
  characterSpacing:number

  /**
   * The extra space in pixels to add vertically between lines. 0 is the default size, negative values make lines closer together, and positive values space lines out further apart.
  */
  lineHeight:number

  /**
   * A string specifying the horizontal alignment of the text within the object bounding box, which must be one of "left", "center" or "right".
   */
  horizontalAlign:string

  /**
   * A string specifying the vertical alignment of the text within the object bounding box, which must be one of "top", "center" or "bottom".
   */
  verticalAlign:string

  /**
   * A string specifying the way to wrap text when it reaches the end of a line. This can be either "word" to wrap entire space-separated words, or "character" to wrap at any character.

   */
  wordWrapMode:string
}

export { ISpriteFontInstance }