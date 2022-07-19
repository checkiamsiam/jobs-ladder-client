import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import filledStar from "../../../asset/testimonial/filled-star.png";
import unFilledStar from "../../../asset/testimonial/unfilled-star.png";
import circle1 from "../../../asset/testimonial/circle-1.png";
import circle3 from "../../../asset/testimonial/circle-3.png";
import client from "../../../asset/testimonial/client.png";
import client2 from "../../../asset/testimonial/client-2.png";
import client3 from "../../../asset/testimonial/client-3.png";
import "./Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-4 lg:px-20 py-20 relative">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">WHAT CUSTOMER SAY</h1>
          <p className="mx-auto mt-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nostrum earum
          </p>
        </div>
        <Slider {...settings}>
          {/* Person 1 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-white">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  Lorem Ipsum doller in dhddf dfsdf sdflkldi werpahf wohjfndf
                  sofdsf n llsdfi a;cvnie sdofjl woadf sapsdfhd
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Malino Alex</h2>
                  <p className="text-xs">Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 2 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-white">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  Lorem Ipsum doller in dhddf dfsdf sdflkldi werpahf wohjfndf
                  sofdsf n llsdfi a;cvnie sdofjl woadf sapsdfhd
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Olivia</h2>
                  <p className="text-xs">Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client2}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 3 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-white">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  Lorem Ipsum doller in dhddf dfsdf sdflkldi werpahf wohjfndf
                  sofdsf n llsdfi a;cvnie sdofjl woadf sapsdfhd
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Eva Rose</h2>
                  <p className="text-xs">Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client3}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 4 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-white">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  Lorem Ipsum doller in dhddf dfsdf sdflkldi werpahf wohjfndf
                  sofdsf n llsdfi a;cvnie sdofjl woadf sapsdfhd
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">John Doe</h2>
                  <p className="text-xs">Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://raw.githubusercontent.com/shakil18046/kerbillas/main/img/team-1.png"
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="absolute left-8 bottom-8 -z-10">
          <img src={circle1} alt="circle" />
        </div>
        <div className="absolute right-8 top-20 -z-10 w-24 h-24">
          <img src={circle3} alt="circle" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
