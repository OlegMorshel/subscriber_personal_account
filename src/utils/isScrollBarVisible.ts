export const isScrollbarVisible = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  check: 'vertical' | 'horizontal' | 'both'
): boolean => {
  const element = ref.current
  if (!element) {
    return false
  }
  if (check === 'vertical') {
    return element.scrollHeight > element.clientHeight
  }
  if (check === 'horizontal') {
    return element.scrollWidth > element.clientWidth
  }
  return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight
}
