"use client";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "./ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState, useRef } from "react";
import { fetchTestimony } from "@/actions/fetchData";

interface  ClientTestimony {
   nameCliente: string,
   testimony: string
}

const ClientsCarousel = () => {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
      );

    const [testimony, setTestimony] = useState<ClientTestimony[]>([])
    useEffect(()=>{
      //obtenemos testimonio
      const getTestimony = async() =>{
        try{
          const data = await fetchTestimony();
          setTestimony(data)

        }catch (error){
          console.error('error al obtener testimonio', error)
        }
      };
      getTestimony()
    },[])



  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          
          <h2 className="text-2xl font-semibold text-black whitespace-pre-line text-center md:text-left">
            Estas son las historias de {'\n'}nuestros clientes
          </h2>

          <div className="w-full md:w-auto flex justify-center items-center overflow-hidden">
            <Carousel
             plugins={[plugin.current]}
             onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
              }}
              className="w-full md:max-w-3xl lg:max-w-4xl" // Ajusta el ancho máximo del carrusel
            >
              <CarouselContent className=" rounded-lg">
                {testimony.map((testimonyData, index) => (
                  <CarouselItem key={index} className="w-full flex-shrink-0 md:basis-1/2 lg:basis-1/3 px-2">
                    <Card className="w-full h-64"> 
                      <CardHeader>
                        <CardTitle>
                          {testimonyData.nameCliente}
                        </CardTitle>
                        <CardDescription>Testimonio</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="text-base">{testimonyData.testimony}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

            </Carousel>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default ClientsCarousel;
