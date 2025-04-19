'use client'

import type { FC } from 'react'

import { LazyLoad } from '~/components/common/Lazyload'

import { ArtalkComment } from './ArtalkComment'
import type { CommentBaseProps } from './types'

const ArtalkCommentRoot: FC<
  CommentBaseProps & {
    allowComment: boolean
  }
> = (props) => {
  const { allowComment, refId } = props

  if (!allowComment && allowComment !== undefined) {
    return (
      <p className="mt-[7.1rem] text-center text-xl font-medium">评论已关闭</p>
    )
  }

  return (
    <div className="relative mt-12">
      <LazyLoad triggerOnce>
        <ArtalkComment refId={refId} />
      </LazyLoad>
    </div>
  )
}

export default ArtalkCommentRoot
