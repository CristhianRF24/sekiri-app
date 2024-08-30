import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./ui/table";
import { fetchChanels, fetchPrices } from "@/app/actions/fetchData";
import CallToAction from "./CallToAction";

const TablePricing = () => {
  const [prices, setPrices] = useState<Array<any>>([]);
  const [chanels, setChanels] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pricesData = await fetchPrices();
      const chanelsData = await fetchChanels();
      setPrices(pricesData);
      setChanels(chanelsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="text-center mt-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Crece tu e-commerce</h2>
        <span className="mt-4 block text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique, necessitatibus, quam impedit nesciunt excepturi, autem
          doloremque explicabo molestiae neque ullam numquam voluptatum vel
          nulla nobis aliquid blanditiis! Quas, nesciunt.
        </span>
        <CallToAction buttonText="Agendar llamada" url="/reservaLlamada" />
      </div>
      <div className="mt-10 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Cómo elegir la mejor pasarela para tu tienda en línea
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Comparativa de pasarelas de pago
        </p>
        <div className="overflow-x-auto border-gray-200 border-2">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Gratis</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Negocio</TableHead>
                <TableHead>Limitado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((price) => (
                <TableRow key={price.id}>
                  <TableCell className="font-medium">{price.label}</TableCell>
                  <TableCell>{price.free}</TableCell>
                  <TableCell>{price.venture}</TableCell>
                  <TableCell>{price.business}</TableCell>
                  <TableCell>{price.unlimited}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell className="font-bold text-start" colSpan={5}>
                  CANALES DE VENTA
                </TableCell>
              </TableRow>

              {chanels.map((chanel) => (
                <TableRow key={chanel.id}>
                  <TableCell className="font-medium">{chanel.canal}</TableCell>
                  <TableCell>
                    {chanel.free ? <FaCheck className="text-green-500" /> : ""}
                  </TableCell>
                  <TableCell>
                    {chanel.venture ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    {chanel.business ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    {chanel.unlimited ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      ""
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TablePricing;
