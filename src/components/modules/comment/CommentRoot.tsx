import type { FC } from 'react'
import Artalk from 'artalk'
import 'artalk/Artalk.css'

import { LazyLoad } from '~/components/common/Lazyload'

import { CommentBoxRoot } from './CommentBox/Root'
import { Comments } from './Comments'
import { CommentSkeleton } from './CommentSkeleton'
import type { CommentBaseProps } from './types'

export const CommentAreaRoot: FC<
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

import type { FC } from 'react'
import Artalk from 'artalk'
import 'artalk/Artalk.css'
+import { useTheme } from '~/hooks/useTheme'
+import { useEffect } from 'react'

export const CommentAreaRoot: FC<
  CommentBaseProps & {
    allowComment: boolean
  }
> = (props) => {
  const { allowComment, refId } = props
+  const { isDarkMode } = useTheme()
  
  // ...
  
  const handleThemeChange = (isDarkMode: boolean) => {
    Artalk.setDarkMode(isDarkMode)
  }
  
+  useEffect(() => {
+    handleThemeChange(isDarkMode)
+  }, [isDarkMode])
  
  return (
    // ...
  )
}

  return (
    <div className="relative mt-12">
      <CommentBoxRoot refId={refId} />

      <div className="h-12" />
      <LazyLoad placeholder={<CommentSkeleton />} triggerOnce>
        <Comments refId={refId} />
      </LazyLoad>
    </div>
  )
}
