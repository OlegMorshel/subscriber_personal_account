export function checkErrorAndTouched(isError?: boolean, isTouched?: boolean, isExistSetTouched?: boolean): boolean {
  if (!isExistSetTouched) {
    return !!isError
  }
  return !!isError && !!isTouched
}
