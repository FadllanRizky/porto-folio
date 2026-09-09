import { useCallback } from 'react'

export function useTilt() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(${y * -4}px)`
    el.style.transition = 'transform 0.1s ease'
  }, [])

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    el.style.transform = ''
    el.style.transition = 'transform 0.5s ease'
  }, [])

  return { onMouseMove, onMouseLeave }
}
