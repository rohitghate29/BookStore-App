import React from "react";
import list from "../../../data/booksData.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from "../cards/BookCard";

function FreeBook() {
  const filteredData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-4">Free Offered Books</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sit
            aliquam expedita amet deserunt praesentium earum provident officiis
            neque possimus.
          </p>
        </div>

        <div> 
          <Slider {...settings}>
            {filteredData.map((item) => (<BookCard item={item} key={item.id} />))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
