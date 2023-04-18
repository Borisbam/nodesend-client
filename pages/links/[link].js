import React, { useState, useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import clientAxios from '../../config/axios';
import appContext from '../../context/app/appContext';
import authContext from '../../context/auth/authContext';

import Alerta from '../../components/Alerta';

export async function getServerSideProps({ params }) {
    const { link } = params;
    const resultado = await clientAxios.get(`/api/links/${link}`);



    return {
        props: {
            link: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    const links = await clientAxios.get('/api/links/');

    return {
        paths: links.data.links.map(link => (
            {
                params: { link: link.url }
            }
        )),
        fallback: false
    }
}


const Link = ({ link }) => {
    const AppContext = useContext(appContext);
    const { mensaje_archivo, mostrarAlerta } = AppContext;

    const AuthContext = useContext(authContext);
    const { token, usuarioAutenticado } = AuthContext;

    const [tienePassword, setTienePassword] = useState(link.password);
    const [password, setPassword] = useState('');
    const [fileLink, setFileLink] = useState(link.file);
    const [ file, setFile] = useState()
    const verificarPassword = async e => {
        e.preventDefault();

        const data = {
            password
        }


        try {
            const resultado = await clientAxios.post(`/api/links/${link.link}`, data);
            setTienePassword(resultado.data.password);
            setFileLink(resultado.data.file);            
        } catch (error) {            
            mostrarAlerta(error.response.data.msg);
        }

    }

    useEffect(() => {

        if (token) {
            usuarioAutenticado();
        }
        
    }, [token])

    

    return (
        <Layout>
            {
                tienePassword ? (
                    <>
                        { mensaje_archivo && <Alerta />}
                        <div className="flex justify-center mt-5">
                            <div className="w-full max-w-lg">
                                <form
                                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                                    onSubmit={e => verificarPassword(e)}
                                >
                                    <div className="mb-4">
                                        <label
                                            className="block text-black text-sm font-bold mb-2"
                                            htmlFor="password"
                                        >Ingresa la contraseña del archivo</label>
                                        <input
                                            type="password"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                                        />

                                        <input
                                            type="submit"
                                            className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold
                                            mt-2"
                                            value="Validar Password"
                                        />

                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                        <>
                            
                            <img src={link.image} className='mx-auto'/>
                            <h1 className='mt-5 text-4xl text-center text-gray-700 break-all'>{link.original_name} </h1>
                            <div className='flex items-center justify-center mt-10'>
                                <a
                                    href={`${process.env.backendURL}/api/files/${fileLink}`} className='bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer'
                                    download
                                >Descargar</a>
                            </div>
                        </>
                    )
            }

        </Layout>
    )
}

export default Link;