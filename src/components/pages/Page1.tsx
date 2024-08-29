'use client';
import { blog } from '@/app/actions/fetchData';
import React, { useEffect, useState } from 'react'

interface BlogData {
    texto: string;
}

const Page1: React.FC<BlogData> = ({texto}) => {
    const [data, setData] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await blog();
        setData(result);
      } catch (err) {
        console.error('error al obtener testimonio', err)      } 
    };

    fetchData();
  }, []);

 
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-3 text-4xl font-extrabold'> {texto}</h1>
         
      {data && data.length > 0 ? (
        data.map((item, index) => (
     
          <div key={index} className='max-w-md mb-4 px-4 py-2 border rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold mb-2'>{item.titulo}</h2>
            <span className='mt-4 text-center'>{item.descripcion}</span>
           

          </div>
        ))
      ) : (
        <h2>loading....</h2>
      )}
    </div>
  );
}

export default Page1