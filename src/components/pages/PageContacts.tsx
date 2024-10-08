"use client";
import React, { useEffect, useState } from "react";
import { fetchGetContacts } from "@/actions/fetchData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link"; 

const PageContacts = () => {
  const [contacs, setContacs] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const contactData = await fetchGetContacts();
        setContacs(contactData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Consultas</h1>

      {isLoading ? ( // Mostrar "Cargando..." mientras isLoading es verdadero
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-center text-xl font-semibold text-gray-700">
            Cargando...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacs.map((contact) => (
            <Card
              key={contact.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <CardHeader className="p-4 border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {contact.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {contact.email}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 overflow-auto">
                <p className="text-gray-700 overflow-visible">
                  {contact.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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

export default PageContacts;
