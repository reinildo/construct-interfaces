import { ILayout } from "./ILayout";

interface ILayer {
  /**
   * A read-only string of the layer name.
   */
  name:string

  /**
   * A read-only number with the zero-based index of the layer on its layout. The bottom layer has an index of 0, with the index increasing upwards in Z order.
   */
  index:number

  /**
   * The ILayout interface representing the layout this layer belongs to.
   */
  layout:ILayout

  /**
   * A boolean indicating if the layer is visible or not. When invisible, the layer skips drawing entirely.
   */
  isVisible:boolean

  /**
   * The opacity of the layer, as a floating point number in the range [0, 1], where 0 is fully transparent and 1 is fully opaque. Note that changing the opacity to a value other than 1 will force the layer to render via its own texture.
   */
  opacity:number
  
  /** 
   * Iterates the layer's own sub-layers in increasing Z order. This does not iterate any sub-layers at lower levels in the hierarchy.
   */
  subLayers():Generator

  /**
   * Iterates the layer's sub-layers and further sub-layers beneath those recursively, in increasing Z order.
   */
  allSubLayers():Generator

  /**
   * A reference to the layer's parent ILayer if it is a sub-layer, else null if it is a top-level layer.
   */
  parentLayer:ILayer

  /**
   * Iterates all the layer's parent layers, moving up towards the top of the hierarchy.
   */
  parentLayers():Generator

  /**
   * A boolean indicating if the layer is interactive, allowing its content to respond to mouse and touch input.
   */
  isInteractive:boolean

  /**
   * Return a DOMRect representing the bounds of the viewport on this layer in layout co-ordinates.
   */
  getViewport():DOMRect

  /**
   * Convert between positions in CSS pixels, such as the clientX/Y properties of an input event, and layer co-ordinates within the project. An optional Z value can be provided to do the conversion taking in to account Z elevation to a certain height on the layer. This is useful for purposes like identifying what position in a layer was clicked in an input event, or positioning a HTML element in layer co-ordinates.
   * @param clientX 
   * @param clientY 
   * @param z - default is 0
   */
  cssPxToLayer(clientX:number, clientY:number, z:number):void
  layerToCssPx(layerX:number, layerY:number, z:number):void

  /**
   * Set or get the background color of a layer as an array with 3 elements specifying the red, green and blue components with values in the 0-1 range. Note this is ignored if the layer is transparent.
   */
  backgroundColor : void | number[]
}

export { ILayer }