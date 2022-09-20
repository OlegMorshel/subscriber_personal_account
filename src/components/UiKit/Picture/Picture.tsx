import React, { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { getPlaceholder } from '@src/utils/getPlaceholder'

interface Props {
  alt: string
  src?: string | null
  className?: string
  width?: number | string
  height?: number | string
}

const Picture: React.FC<Props> = memo(({ alt, src, className, height, width }) => {
  const checkIsImageCached = (srcImage?: string | null): boolean => {
    if (!srcImage) return false
    const image = typeof window !== 'undefined' ? new Image() : { complete: false, src: '' }
    image.src = srcImage
    return image.complete
  }

  return (
    <LazyLoadImage
      effect={checkIsImageCached(src) ? undefined : 'blur'}
      src={src ?? getPlaceholder()}
      alt={alt}
      className={`${className}`}
      key={src}
      width={width}
      height={height}
    />
  )
})

export default Picture
