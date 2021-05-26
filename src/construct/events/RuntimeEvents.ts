export enum RuntimeEvents {
  /**
   * Fires every tick, just before running the layout's event sheet.
   * Use the runtime.dt property to access delta-time and step the game's logic by that amount of time.
   */
  tick = 'tick',

  /**
   * Fired once only when the first layout in the project starts. "beforeprojectstart" fires before "beforelayoutstart" on the first layout, which in turn is before On start of layout triggers. "afterprojectstart" fires after "afterlayoutstart" on the first layout, which in turn is after On start of layout triggers. In both events, all instances on the first layout are created and available to modify.
   */
  beforeprojectstart = 'beforeprojectstart',
  afterprojectstart = 'afterprojectstart'

}