import type { ModalContentComponent } from '~/components/ui/modal'

import { CommentsLazy } from '../comment'

export interface CommentModalProps {
  title: string
  refId: string

  initialValue?: string
}

export const CommentModal: ModalContentComponent<CommentModalProps> = (
  props,
) => {
  const { refId, title } = props

  return (
    <div className="max-w-95vw overflow-y-auto overflow-x-hidden md:w-[500px] lg:w-[600px] xl:w-[700px]">
      <span>
        回复： <h1 className="mt-4 text-lg font-medium">{title}</h1>
      </span>

      <CommentsLazy refId={refId} />
    </div>
  )
}
