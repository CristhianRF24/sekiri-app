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
import { fetchCanales, fetchPrecios } from "@/app/actions/fetchData";
import CallToAction from "./CallToAction";

const TablePricing = () => {
  const [precios, setPrecios] = useState<Array<any>>([]);
  const [canales, setCanales] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const preciosData = await fetchPrecios();
      const canalesData = await fetchCanales();
      setPrecios(preciosData);
      setCanales(canalesData);
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
                <TableHead>Free</TableHead>
                <TableHead>Venture</TableHead>
                <TableHead>Business</TableHead>
                <TableHead>Unlimited</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {precios.map((precio) => (
                <TableRow key={precio.id}>
                  <TableCell className="font-medium">{precio.label}</TableCell>
                  <TableCell>{precio.free}</TableCell>
                  <TableCell>{precio.venture}</TableCell>
                  <TableCell>{precio.business}</TableCell>
                  <TableCell>{precio.unlimited}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell className="font-bold text-start" colSpan={5}>
                  CANALES DE VENTA
                </TableCell>
              </TableRow>

              {canales.map((canal) => (
                <TableRow key={canal.id}>
                  <TableCell className="font-medium">{canal.canal}</TableCell>
                  <TableCell>
                    {canal.free ? <FaCheck className="text-green-500" /> : ""}
                  </TableCell>
                  <TableCell>
                    {canal.venture ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    {canal.business ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    {canal.unlimited ? (
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
