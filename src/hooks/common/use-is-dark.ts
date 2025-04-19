'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const useIsDark = () => {
  const { resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])

  return isDark
}
