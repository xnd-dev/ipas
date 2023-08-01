import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { slidesData } from './carousel.constants'

enum UPDATE_COUNT {
  INCREMENT,
  DECREMENT,
}

export function useCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSwipe = (updateCount: UPDATE_COUNT) => {
    if (updateCount === UPDATE_COUNT.DECREMENT) {
      activeIndex === 0
        ? setActiveIndex(slidesData.length - 1)
        : setActiveIndex((oldIndexState) => oldIndexState - 1)
    } else {
      activeIndex === slidesData.length - 1
        ? setActiveIndex(0)
        : setActiveIndex((oldIndexState) => oldIndexState + 1)
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
    slidesData,
  }
}
