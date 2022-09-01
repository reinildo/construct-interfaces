import { IObjectClass } from './IObjectClass'

interface IBehavior {
  /**
   * Return an array of all instances that have this kind of behavior, for example every object with the Solid behavior. Note the returned instances may come from a range of different object types.
   */
  getAllInstances():IObjectClass[]
}

export { IBehavior }