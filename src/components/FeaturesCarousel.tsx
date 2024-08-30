"use client";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

const FeaturesCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const imageLogo = [
    "/img/logo-Mastercard.png",
    "/img/seven-eleven.png",
    "/img/VISA-Logo.png",
    "/img/logo-Mastercard.png",
    "/img/seven-eleven.png",
    "/img/VISA-Logo.png",
  ];

  return (
    <div className="w-full flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseLeave={plugin.current.reset}
        opts={{ align: "start" }}
      >
        <CarouselContent className="w-full  flex gap-x-2">
          {imageLogo.map((imageSrc, index) => (
            <CarouselItem key={index} className="w-full md:basis-1/2 lg:basis-1/3">
              <div className="relative w-full h-24">
                <Card className="absolute inset-0 border-none bg-transparent p-0">
                  <CardContent className="flex aspect-square items-center justify-center p-0 w-full h-full">
                    <img
                      src={imageSrc}
                      alt={`Image ${index + 1}`}
                      className="object-contain w-12 h-12"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturesCarousel;
