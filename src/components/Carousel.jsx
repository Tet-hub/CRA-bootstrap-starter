import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import heroleft from "../images/1280-720-left.jpg";
import heroright from "../images/1280-720-right.jpg";

const Carousel = () => {
  return (
    <div className="pt-4">
      <CCarousel controls indicators transition="crossfade" dark>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={heroleft}
            alt="slide 1"
            style={{ height: "37rem" }}
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={heroright}
            alt="slide 2"
            style={{ height: "37rem" }}
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={heroleft}
            alt="slide 3"
            style={{ height: "37rem" }}
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={heroright}
            alt="slide 3"
            style={{ height: "37rem" }}
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Fourth slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Carousel;
