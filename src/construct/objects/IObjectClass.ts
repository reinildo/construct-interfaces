import { IWordInstance } from "./IWordInstance";

interface IObjectClass {
  /**
   * Create a new instance of the object type at a position. The layer to create on is specified either by a case-insensitive string of the layer name or its zero-based index. The position is given in layout co-ordinates. If createHierarchy is true, all children of the created instance in the scene-graph hierarchy will also be created automatically with their connections in place. Returns an instance class representing the created instance.
   * @param layerNameOrIndex - The layer name [string] or index [number] to create the instance
   * @param x - The x position of new instance
   * @param y - The y position of new instance
   * @param createHierarchy - Whether to create or not a Hierarchy
   */
  createInstance(layerNameOrIndex: number | string, x:number, y:number, createHierarchy:boolean):IObjectClass
}

export { IObjectClass }