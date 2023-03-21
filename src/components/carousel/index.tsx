import { AnimatePresence, motion } from "framer-motion";
import Button from "../button";
import "./index.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./slider";

const Carousel = () => {
    
  return (
    // <AnimatePresence>
    <div className="carousel-container">
      <div className="">
       
        {/* <h1 className="text-5xl mb-8">Carousel</h1>
        <div className="flex flex-col">
          <p className="w-7/12 mb-8">
            This is a dummy paragraph real content is yet to come.This is a
            dummy paragraph real content is yet to come.This is a dummy
            paragraph real content is yet to come.
          </p>
          <Button />
        </div> */}
        <CarouselSlider images={[]} />
      </div>
    </div>
    // </AnimatePresence>
  );
};

export default Carousel;
