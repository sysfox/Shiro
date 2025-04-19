'use client'

import { useEffect, useState } from 'react'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'

import { ArtalkComment } from './ArtalkComment'
import { Comments } from './Comments'
import {
  CommentSystemSwitch,
  useCommentSystemType,
} from './CommentSystemSwitch'
import type { CommentBaseProps } from './types'

export const UniversalComment = (
  props: CommentBaseProps & { className?: string },
) => {
  const { refId, className } = props
  const { type } = useCommentSystemType()
  const [mounted, setMounted] = useState(false)

  // Only render on client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ErrorBoundary>
      <div className={className} data-hide-print>
        <CommentSystemSwitch />

        {type === 'artalk' ? (
          <ArtalkComment refId={refId} />
        ) : (
          <Comments refId={refId} />
        )}
      </div>
    </ErrorBoundary>
  )
}
