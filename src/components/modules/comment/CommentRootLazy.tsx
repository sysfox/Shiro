'use client'

import Artalk from 'artalk'
import 'artalk/Artalk.css'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'

import { CommentAreaRoot } from './CommentRoot'

export const CommentAreaRootLazy: typeof CommentAreaRoot = (props) => {
  const handleThemeChange = (isDarkMode: boolean) => {
    Artalk.setDarkMode(isDarkMode)
  }

  // Subscribe to theme changes, for example:
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleThemeChange(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => handleThemeChange(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <ErrorBoundary>
      <CommentAreaRoot {...props} />
    </ErrorBoundary>
  )
}
  return (
    <ErrorBoundary>
      <CommentAreaRoot {...props} />
    </ErrorBoundary>
  )
}
