import { MutableRefObject, useEffect } from 'react'

export const useClickOutside = (
  element: MutableRefObject<any>,
  callback: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        element.current &&
        !element.current.contains(event.target as EventTarget)
      ) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
