import { IWordInstance } from '../objects/IWordInstance'
interface ITextInstance extends IWordInstance {
  /**
   * The string currently displayed by the Text object.
   */
  text: string
}

export { ITextInstance }