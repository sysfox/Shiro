'use client'

import { useLocalStorage } from 'foxact/use-local-storage'
import { useEffect, useState } from 'react'

import { StyledButton } from '~/components/ui/button'

export type CommentSystemType = 'artalk' | 'legacy'

const LOCAL_STORAGE_KEY = 'comment-system-type'

export const useCommentSystemType = () => {
  const [stored, setStored] = useLocalStorage<CommentSystemType>(
    LOCAL_STORAGE_KEY,
    'artalk', // default to artalk
  )
  const [value, setValue] = useState<CommentSystemType>('artalk')

  useEffect(() => {
    setValue(stored || 'artalk')
  }, [stored])

  const setType = (type: CommentSystemType) => {
    setStored(type)
    setValue(type)
  }

  return { type: value, setType }
}

export const CommentSystemSwitch = () => {
  const { type, setType } = useCommentSystemType()

  return (
    <div className="mb-4 flex items-center justify-end space-x-2">
      <div className="text-xs text-zinc-500">Comment System:</div>
      <StyledButton
        className="px-2 py-1 text-xs"
        variant={type === 'artalk' ? 'primary' : 'secondary'}
        onClick={() => setType('artalk')}
      >
        Artalk
      </StyledButton>
      <StyledButton
        className="px-2 py-1 text-xs"
        variant={type === 'legacy' ? 'primary' : 'secondary'}
        onClick={() => setType('legacy')}
      >
        Legacy
      </StyledButton>
    </div>
  )
}
