import dynamic from 'next/dynamic'
import { createElement } from 'react'

import { Loading } from '~/components/ui/loading'


// Artalk comment component (default)
export const CommentsLazy = dynamic(() => import('./ArtalkCommentWrapper'), {
  ssr: false,
})

// Export area component for page layout
export const CommentAreaRootLazy = dynamic(
  () => import('./ArtalkCommentRoot'),
  {
    ssr: false,
    loading: () => createElement(Loading, { useDefaultLoadingText: true }),
  },
)

// Export other components
export { ArtalkComment } from './ArtalkComment'
