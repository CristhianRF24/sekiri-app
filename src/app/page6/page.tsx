import { Metadata } from 'next';
import { fetchBlog } from '@/actions/fetchData';
import Page1 from '@/pages/Page1'


export const dynamic = 'force-dynamic';

export const generateMetadata = async (): Promise<Metadata> =>{
  try {
    const data = await fetchBlog('7');

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
const page = () => {
  return (
    <div>
        <Page1
        texto='Pagina 6'
        id='7'
      />
    </div>
  )
}

export default page