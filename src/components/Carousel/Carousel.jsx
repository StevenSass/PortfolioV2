import "./Carousel.scss";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import CarouselItem from "../CarouselItem/CarouselItem";
import data from "../../data/project.json";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleCountChange = (newCount) => {
    if (newCount < 0) {
      setCount(data.length - 1);
    } else if (newCount >= data.length) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  const handlePrevClick = () => {
    handleCountChange(count - 1);
  };

  const handleNextClick = () => {
    handleCountChange(count + 1);
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        handleNextClick();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [count, isHovered]);

  return (
    <main className="modal">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="carousel">
        <div className="carousel__left" onClick={handlePrevClick}>
          <KeyboardArrowLeftRoundedIcon />
        </div>
        <div className="carousel__item">
          <CarouselItem index={count} />
        </div>
        <div className="carousel__right" onClick={handleNextClick}>
          <KeyboardArrowRightRoundedIcon />
        </div>
      </div>
    </main>
  );
}
