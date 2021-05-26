import { IObjectClass } from "../objects/IObjectClass";

type requestPermissionType = 'orientation' | 'motion'
type requestPermissionReturn = 'granted' | 'denied'

interface ITouchObjectType extends IObjectClass{
  requestPermission(type:requestPermissionType ):Promise<requestPermissionReturn>
}

export { ITouchObjectType }