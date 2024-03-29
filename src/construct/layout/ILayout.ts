import { ILayer } from "./ILayer";

interface ILayout {
  /**
   * A read-only string of the layout name.
   */
  name:string

  /**
   * A read-only number of the zero-based index of the layout in the order it appears in the Project Bar.
   */
  index:number

  /**
   * Get an ILayer interface for a layer on the layout, by a case-insensitive string of its name or its zero-based index.
   */
   getLayer(layerNameOrIndex:string | number): ILayer;

  /**
   * Return an array of ILayer interfaces representing all the layers on the layout.
   */
  getAllLayers():ILayer[]

  /**
   * Set or get the size of the layout. Note a layout cannot have a zero or negative size.
   */
  width:number
  height:number

  /**
   * Scroll to the given position in layout co-ordinates.
   * @param x - x position to scroll to
   * @param y - y position to scroll to
   */
  scrollTo(x:number, y:number):void

  /**
   * Set or get the layout scale, with 1 being the default scale, 2 being 2x scale, etc. This scales all the layers in the layout, taking in to account their scale rate property.
   */
  scale: number
}

export { ILayout }