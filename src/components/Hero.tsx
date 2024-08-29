import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import CallToAction from "./CallToAction";
import { fetchDataButton } from "@/app/actions/fetchData";
import Link from "next/link";

interface ButtonData {
  id: number;
  text: string;
  path?: string;
}

const Hero = () => {
  const [data, setData] = useState<ButtonData[]>([]);

  useEffect(() => {
    const fetchDataFromSupabase = async () => {
      try {
        const result = await fetchDataButton();
        const formattedResult = result.map((item: any) => ({
          id: item.id,
          text: item.text,
          path: item.path,
        }));
        setData(formattedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromSupabase();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center whitespace-pre-line">
        <span className="text-4xl  ">
          Integra la pasarela de pagos que quieras a tu
          <h1>
            {" \n"}
            <strong>tienda en linea</strong>
          </h1>
        </span>
        <p className="text-center mt-4">
          Escoge la pasarela de pago que mas te convenga y la integramos por ti.
          {"\n"}
          Ademas podemos ayudarte a recibir pagos en linea desde cualquier lugar
          de forma simple y sin rebotes.
        </p>
        <div className=" flex justify-center mt-10">
          <img src="/img/pc.png" alt="imagen pc" />
        </div>

        <div className="flex flex-col items-center justify-center  bg-white pt-4">
          <div className="bg-white border-gray-950 border-2 p-8  max-w-5xl mx-4 w-full md:mx-8">
            <h2 className="text-center text-xl font-semibold mb-6">
              ¿Qué necesitas?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 mb-6">
              {data &&
                data.map((item) => {
                  return (
                    <Link key={item.id} href={item.path || "/"} passHref>
                      <Button
                        className="w-full max-w-md h-16 py-4 px-6 text-sm text-center rounded-lg break-words whitespace-normal overflow-hidden flex items-center justify-center"
                        variant="outline"
                      >
                        {item.text}
                      </Button>
                    </Link>
                  );
                })}
            </div>
            <CallToAction
              buttonText="Agendar llamada consultoría"
              url="/reservaLlamada"
            />
          </div>
        </div>
      </div>

      <div className="mt-32 text-center container mx-auto ">
        <span className="text-4xl whitespace-pre-line">
          Integra todos los métodos de pago a tu tienda{"\n"} en línea{"\n"}
        </span>
        <span className="block mt-4 text-wrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          ullam sequi quam, quibusdam rerum facere ad eligendi magnam et
          consequatur officiis, corrupti dolor iste dolores veritatis sunt
          quidem libero unde!
        </span>
      </div>
    </section>
  );
};

export default Hero;
