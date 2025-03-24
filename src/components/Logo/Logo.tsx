import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={85}
      height={85}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[85px] w-16 h-16 md:w-full md:h-[85px]', className)}
      src="/api/media/file/apple-touch-icon%20(1).png"
    />
  )
}
