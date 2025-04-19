'use client'

import dynamic from 'next/dynamic'

import type { CommentBaseProps } from './types'

export const CommentsLazy = dynamic<CommentBaseProps>(
  () =>
    import('./ArtalkCommentWrapper').then((mod) => mod.ArtalkCommentWrapper),
  { ssr: false },
)
