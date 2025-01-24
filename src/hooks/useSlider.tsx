import { useEffect, useRef, useState } from "react"

interface UseSliderReturn {
  sliderRef: React.RefObject<HTMLUListElement>;
  currentIndex: number;
  visibleCount: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const useSlider = (itemsCount: number): UseSliderReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [gap, setGap] = useState(100);
  const sliderRef = useRef<HTMLUListElement>(null);

  const nextSlide = () => {
    if (currentIndex < itemsCount - visibleCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }

  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

	useEffect(() => {
    const updateSlider = () => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;

        const computedGap = parseInt(window.getComputedStyle(sliderRef.current).gap || '100px', 10);
        setGap(computedGap);

        setVisibleCount(Math.floor(sliderRef.current.offsetWidth / (itemWidth + gap)));


        const totalWidth = itemWidth * itemsCount + gap * (itemsCount - 1);
        const maxTranslateX = totalWidth - sliderRef.current.offsetWidth;
        const translateX = Math.min(currentIndex * (itemWidth + gap), maxTranslateX);

        sliderRef.current.style.transform = `translateX(-${translateX}px)`;
        }
      }

      updateSlider();

      window.addEventListener("resize", updateSlider);
      return () => {
        window.removeEventListener("resize", updateSlider);
      };
    }, [currentIndex, itemsCount]);


  useEffect(() => {
    if (!sliderRef.current) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) {
        nextSlide();
      } else if (endX - startX > 50) {
        prevSlide();
      }
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("touchstart", handleTouchStart);
    sliderElement.addEventListener("touchmove", handleTouchMove);
    sliderElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      sliderElement.removeEventListener("touchstart", handleTouchStart);
      sliderElement.removeEventListener("touchmove", handleTouchMove);
      sliderElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  return { sliderRef, currentIndex, nextSlide, prevSlide, visibleCount };
};

export default useSlider;
