import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { SlideData } from './carousel.types'

enum UPDATE_COUNT {
  INCREMENT,
  DECREMENT,
}

export function useCarousel(slidesData: SlideData[]) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSwipe = (updateCount: UPDATE_COUNT) => {
    if (
      (updateCount === UPDATE_COUNT.DECREMENT && activeIndex > 0) ||
      (updateCount === UPDATE_COUNT.INCREMENT &&
        activeIndex < slidesData.length - 1)
    ) {
      const newActiveIndex = activeIndex + updateCount
      setActiveIndex(newActiveIndex)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(UPDATE_COUNT.INCREMENT),
    onSwipedRight: () => handleSwipe(UPDATE_COUNT.DECREMENT),
  })

  const currentItem = slidesData[activeIndex]

  return {
    currentItem,
    swipeHandlers,
    setActiveIndex,
  }
}
