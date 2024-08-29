import Page1 from '@/components/pages/Page1'
import React from 'react'
import { blog } from '../actions/fetchData'
import { Metadata } from 'next'


export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await blog();

    if (!data || data.length === 0) {
      throw new Error('No data available');
    }

    const { titulo, descripcion } = data[0]; // Asumiendo que estás obteniendo un solo registro de blog.

    return {
      title: titulo,
      description: descripcion,
      openGraph: {
        title: titulo,
        description: descripcion,
        url: 'https://sekiri-app.vercel.app/',
        siteName: 'Dev Blog',
        images: [
          {
            url: '/img/opengraph.jpg',
            width: 1200,
            height: 630,
            alt: 'Descripción de la imagen',
          },
        ],
        locale: 'es_ES',
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Error',
      description: 'No se pudieron cargar los datos de la página',
    };
  }
}
const Vidas = () => {
  return (
    <div>
      <Page1
        texto='Pagina 1'
      />

    </div>
  )
}

export default Vidas