'use client'

import 'artalk/dist/Artalk.css'

import type Artalk from 'artalk'
import { default as ArtalkInstance } from 'artalk'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { useIsDark } from '~/hooks/common/use-is-dark'

export interface ArtalkCommentProps {
  refId: string
  title?: string
  className?: string
}

export const ArtalkComment = (props: ArtalkCommentProps) => {
  const { refId, title } = props
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const artalkRef = useRef<Artalk | null>(null)
  const isDark = useIsDark()

  const pageKey = refId || pathname
  const pageTitle = title || document.title

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize Artalk
    artalkRef.current = ArtalkInstance.init({
      el: containerRef.current,
      pageKey,
      pageTitle,
      server: process.env.NEXT_PUBLIC_ARTALK_SERVER || '', // This should be set in your .env file
      site: process.env.NEXT_PUBLIC_ARTALK_SITE || '', // This should be set in your .env file
      darkMode: isDark,
    })

    // Clean up function
    return () => {
      if (artalkRef.current) {
        artalkRef.current.destroy()
        artalkRef.current = null
      }
    }
  }, [pageKey, pageTitle, isDark])

  // Update if page changes
  useEffect(() => {
    if (!artalkRef.current) return

    const currentPageKey = refId || pathname
    const currentPageTitle = title || document.title

    artalkRef.current.update({
      pageKey: currentPageKey,
      pageTitle: currentPageTitle,
      darkMode: isDark,
    })

    artalkRef.current.reload()
  }, [refId, pathname, searchParams, title, isDark])

  return (
    <div
      ref={containerRef}
      className={props.className || 'min-h-[300px] w-full'}
      data-hide-print
    />
  )
}
