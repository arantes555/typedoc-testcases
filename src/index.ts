export default (
  /** description of directArgFuncWithInlineType */
  directArgFuncWithInlineType: () => void,
  /** description of args */
  args: {
    /** description of argString */
    argString: string,
    /** description of argStringOpt */
    argStringOpt?: string,
    /** description of argNumber */
    argNumber: number
    /** description of argFuncWithInlineType */
    argFuncWithInlineType: () => void
    /** description of argFuncWithNamedType */
    argFuncWithNamedType: MyCallBack
    argWithoutDesc: number
  }
) => {}

export type MyCallBack = () => void

export interface CustomTypeWithUnderscore {
  _propertyWithUnderscore: number
}
