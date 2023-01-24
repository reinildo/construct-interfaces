import { IInstance } from './IInstance'

interface IDOMInstance extends IInstance {
    /**
     * Focus or blur the DOM element represented by this instance.
     */
    focus(): void
    blur(): void

    /**
     * 
     * @param prop e.g "background-color"
     * @param val  e.g "red"
     * Apply a CSS style to the DOM element, using a string of the property name (in CSS format, e.g. "background-color" and a string of the property value (e.g. "red").
     */
    setCssStyle(prop:string, val:string): void

    /**
     * Return the HTML element used to represent the object.
     */
    getElement(): HTMLElement
  
}

export { IDOMInstance }