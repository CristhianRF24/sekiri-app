'use client';
import { blog } from '@/app/actions/fetchData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/router'; // Añadido para obtener ID de la URL

interface BlogData {
    texto: string;
    id: string; // Nuevo: Aceptar un identificador
}

const Page1: React.FC<BlogData> = ({ texto, id }) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await blog(id); // Pasar el ID para filtrar datos
                setData(result);
            } catch (err) {
                console.error('Error al obtener testimonio', err);
            }
        };

        fetchData();
    }, [id]); // Dependencia en ID

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='mb-3 text-4xl font-extrabold'>{texto}</h1>
            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className='max-w-md mb-4 px-4 py-2 border rounded-lg shadow-lg'>
                        <h2 className='text-3xl font-bold mb-2'>{item.titulo}</h2>
                        <span className='mt-4 text-center'>{item.descripcion}</span>
                    </div>
                ))
            ) : (
                <h2>Cargando....</h2>
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
}

export default Page1;
