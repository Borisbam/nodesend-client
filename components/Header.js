import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { useRouter } from 'next/router';

const Header = () => {

    // Routing
    const router = useRouter();

    const Authcontext = useContext(authContext);
    const { token, usuario, autenticado, usuarioAutenticado, cerrarSesion } = Authcontext;

    //App Context
    const AppContext = useContext(appContext);
    const { limpiarState } = AppContext;

    useEffect(() => {

        if (autenticado) {
            usuarioAutenticado();
        }

    }, [token])

    const redireccionar = () => {
        router.push('/');
        limpiarState();
    }

    return (
        <header className='py-8 flex flex-col md:flex-row items-center justify-between'>

            <img
                className='w-64 mb-8 md:mb-0 cursor-pointer' src='/img/logo.svg'
                onClick={() => redireccionar()}
            />

            { usuario ? (
                <div className='flex items-center'>
                    <p className='mr-2 font-bold'>Hola, {usuario.name}</p>
                    <button
                        type='button'
                        className='bg-black px-5 py-3 rounded-lg text-white font-bold uppercase'
                        onClick={() => { cerrarSesion(); }}
                    >
                        Cerrar Sesión
                </button>
                </div>
            ) : (
                    <div>
                        <Link href='/login'>
                            <a className='bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2'>Iniciar Sesión</a>
                        </Link>
                        <Link href='/registro'>
                            <a className='bg-black px-5 py-3 rounded-lg text-white font-bold uppercase'>Regístrate</a>
                        </Link>
                    </div>
                )
            }

        </header>
    );
}

export default Header;