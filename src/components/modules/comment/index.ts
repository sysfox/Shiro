import dynamic from 'next/dynamic'
import { createElement } from 'react'

import { Loading } from '~/components/ui/loading'

import type { CommentBaseProps } from './types'

// Legacy comment components (keeping for backward compatibility)
export const LegacyCommentsLazy = dynamic(
  () => import('./Comments').then((mod) => mod.Comments),
  { ssr: false },
)
export const LegacyCommentBoxRootLazy = dynamic(
  () => import('./CommentBox').then((mod) => mod.CommentBoxRoot),
  {
    ssr: false,
    loading: () => createElement(Loading, { useDefaultLoadingText: true }),
  },
)

// New Artalk comment component (default)
export const CommentsLazy = dynamic<CommentBaseProps>(
  () => import('./UniversalComment').then((mod) => mod.UniversalComment),
  { ssr: false },
)

// Export lazy-loaded components
export const CommentBoxRootLazy = dynamic(
  () => import('./CommentBox/Root').then((mod) => mod.CommentBoxRoot),
  {
    ssr: false,
    loading: () => createElement(Loading, { useDefaultLoadingText: true }),
  },
)

export const CommentAreaRootLazy = dynamic<
  CommentBaseProps & { allowComment: boolean }
>(() => import('./CommentRoot').then((mod) => mod.CommentAreaRoot), {
  ssr: false,
  loading: () => createElement(Loading, { useDefaultLoadingText: true }),
})

// Export other components
export { ArtalkComment } from './ArtalkComment'
export { CommentBoxRoot } from './CommentBox'
export { UniversalComment } from './UniversalComment'
