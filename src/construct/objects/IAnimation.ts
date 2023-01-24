interface IAnimation {
  /**
   * A read-only string of the animation name.
   */
  name:string

  /**
   * A read-only number with the animation playback speed in animation frames per second.
   */
  speed:number
}

export { IAnimation }