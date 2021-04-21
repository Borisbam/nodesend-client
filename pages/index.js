import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import Link from 'next/link';
import Dropzone from '../components/Dropzone';

const Index = () => {
  // Context Auth
  const AuthContext = useContext(authContext);
  const { autenticado, usuarioAutenticado } = AuthContext;

  // Context App
  const AppContext = useContext(appContext);
  const { mensaje_archivo, url } = AppContext;
  // Extraer usuario autenticado del storage

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    }
  }, [])

  const dwLink = `${process.env.frontendURL}/links/${url}`;

  return (
    <Layout>
      <div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>
        {url ? (
          <>
            <p className='font-bold text-center text-2xl'>Tu URL es: <span className='text-red-700 text-2xl break-all hover:underline cursor-pointer'><a href={dwLink} target='_blank'>{dwLink}</a></span>
            </p>

            <button
              type='button'
              className='bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer mt-10'
              onClick={() => navigator.clipboard.writeText(`${process.env.frontendURL}/links/${url}`)}
            >
              Copiar enlace
            </button>
          </>
        ) : (
            <>
              {mensaje_archivo && <Alerta />}
              <div className='lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10'>
                <Dropzone />

                <div className='md:flex-1 mb-3 mx-2 mt-16 lg:mt-0'>
                  <h2 className='text-4xl font-sans font-bold text-gray-800 my-4'>Compartir archivos</h2>
                  <p className="text-lg leading-loose">
                    <span className="text-red-500 font-bold">ReactNodeSend</span> te permite compartir archivos con cifrado de extremo a extremo y un archivo que es eliminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en línea para siempre.
                  </p>
                  {autenticado ? null : (
                    <Link href='/registro'>
                      <a className='mt-3 text-red-500 font-bold text-lg hover:text-red-700'>Crea una cuenta para mayores beneficios</a>
                    </Link>
                  )}

                </div>
              </div>
            </>
          )}
      </div>
    </Layout>
  );
}

export default Index;
