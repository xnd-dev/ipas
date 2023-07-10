import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { SlideData } from './carousel.types'

export function useCarousel(slidesData: SlideData[]) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSwipe = (direction: number) => {
    if (
      (direction === -1 && activeIndex > 0) ||
      (direction === 1 && activeIndex < slidesData.length - 1)
    ) {
      const newActiveIndex = activeIndex + direction
      setActiveIndex(newActiveIndex)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
  })

  const currentItem = slidesData[activeIndex]

  return {
    currentItem,
    swipeHandlers,
    setActiveIndex,
  }
}
