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
      setActiveIndex((oldIndexState) =>
        oldIndexState === 0 ? slidesData.length - 1 : oldIndexState - 1,
      )
    } else {
      setActiveIndex((oldIndexState) =>
        oldIndexState === slidesData.length - 1 ? 0 : oldIndexState + 1,
      )
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
    activeIndex,
    setActiveIndex,
    slidesData,
  }
}
