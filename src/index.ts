export default (args: {
  /** description of argString */
  argString: string,
  /** description of argStringOpt */
  argStringOpt?: string,
  /** description of argNumber */
  argNumber: number
  /** description of argFunc */
  argFunc: () => void
  argWithoutDesc: number
}) => {}

export interface CustomTypeWithUnderscore {
  _propertyWithUnderscore: number
}
