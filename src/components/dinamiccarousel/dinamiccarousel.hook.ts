import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { slidesData } from './dinamiccarousel.constants'

enum UPDATE_COUNT {
  INCREMENT,
  DECREMENT,
}

export function useCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  function handleSwipe(updateCount: UPDATE_COUNT) {
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

  function decrement() {
    setActiveIndex(activeIndex === 0 ? slidesData.length - 1 : activeIndex - 1)
  }

  function increment() {
    setActiveIndex(activeIndex === slidesData.length - 1 ? 0 : activeIndex + 1)
  }

  function isSameIndex(index: number) {
    return activeIndex === index
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(UPDATE_COUNT.INCREMENT),
    onSwipedRight: () => handleSwipe(UPDATE_COUNT.DECREMENT),
  })

  const currentItem = slidesData[activeIndex]

  return {
    currentItem,
    swipeHandlers,
    decrement,
    increment,
    isSameIndex,
    setActiveIndex,
    slidesData,
  }
}
