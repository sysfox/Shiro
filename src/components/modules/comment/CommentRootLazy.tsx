'use client'

import Artalk from 'artalk'
import 'artalk/Artalk.css'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'

import { CommentAreaRoot } from './CommentRoot'

export const CommentAreaRootLazy: typeof CommentAreaRoot = (props) => {
  const handleThemeChange = (isDarkMode: boolean) => {
    Artalk.setDarkMode(isDarkMode)
  }

  return (
    <ErrorBoundary>
      <CommentAreaRoot {...props} />
    </ErrorBoundary>
  )
}
