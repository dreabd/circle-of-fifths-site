import { useState, useEffect } from 'react';
import { announcements as data } from './exampleAnx';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import CarouselItem from "./CarouselItem"


function AnnoucementsCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const infScroll = () => {
    if (currentIdx === data.length - 1) return setCurrentIdx(0)
    return setCurrentIdx(currentIdx + 1)
  }

  const nextControl = (() => { setCurrentIdx(currentIdx === data.length - 1 ? 0 : currentIdx + 1) })
  const prevControl = (() => { setCurrentIdx(currentIdx === 0 ? data.length - 1 : currentIdx - 1) }
  )
  // useEffect(() => {
  //     const interval = setInterval(() => { infScroll() }, 3000)
  //     return () => clearInterval(interval)
  // }, [currentIdx])

  console.log(data.length)
  console.log(data[currentIdx].announcement)
  return (
    <div className="carousel">

      {/* Makes the carousel go left */}
      <button
        className="arrow arrow-left"
        onClick={prevControl}
      >
        <i style={{ color: "white" }} className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Carousel Items */}
      {data.map((announcement, index) => <CarouselItem index={currentIdx} announcement={announcement} />)}

      {/* Location of the Carousel */}
      <div className="carousel-indicator">
        {data.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIdx ? 'active' : ''}`}
          ></div>
        ))}
      </div>

      {/* Makes the carousel go right */}

      <button
        onClick={nextControl}
        className="arrow arrow-right"
      >
        <i style={{ color: "white" }} className="fa-solid fa-chevron-right"></i>
      </button>

    </div>
  )
}

export default AnnoucementsCarousel
