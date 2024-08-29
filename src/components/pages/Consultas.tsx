"use client";
import React, { useEffect, useState } from "react";
import { fetchConsultas } from "@/app/actions/fetchData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link"; // Importando Link de next/link

const Consultas = () => {
  const [consultas, setConsultas] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const consultasData = await fetchConsultas();
      setConsultas(consultasData);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Consultas</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {consultas.map((consulta) => (
          <Card
            key={consulta.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <CardHeader className="p-4 border-b border-gray-200">
              <CardTitle className="text-xl font-semibold text-gray-800">
                {consulta.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {consulta.email}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-gray-700">{consulta.mensaje}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/" passHref>
          <Button variant="default" className="bg-blue-600 text-white">
            Regresar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Consultas;
