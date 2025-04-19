'use client'

import { useEffect, useState } from 'react'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'

import { ArtalkComment } from './ArtalkComment'
import type { CommentBaseProps } from './types'

const UniversalComment = (props: CommentBaseProps & { className?: string }) => {
  const { refId, className } = props
  const [mounted, setMounted] = useState(false)

  // Only render on client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ErrorBoundary>
      <div className={className} data-hide-print>
        <ArtalkComment refId={refId} />
      </div>
    </ErrorBoundary>
  )
}

export default UniversalComment
