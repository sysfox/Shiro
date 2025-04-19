'use client'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'

import { ArtalkComment } from './ArtalkComment'
import type { CommentBaseProps } from './types'

const ArtalkCommentWrapper = (
  props: CommentBaseProps & { className?: string },
) => {
  const { refId, className } = props

  return (
    <ErrorBoundary>
      <div className={className} data-hide-print>
        <ArtalkComment refId={refId} />
      </div>
    </ErrorBoundary>
  )
}

export default ArtalkCommentWrapper
