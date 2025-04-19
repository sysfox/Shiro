'use client'

import type { PropsWithChildren } from 'react'

import { Markdown } from '~/components/ui/markdown'

export const CommentMarkdown = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Markdown
      className="prose prose-sm break-words text-zinc-800 dark:text-zinc-200"
      allowsScript={false}
    >
      {children as string}
    </Markdown>
  )
}
