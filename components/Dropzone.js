import React, { useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import clientAxios from '../config/axios';
import Loader from 'react-loader-spinner';
import appContext from '../context/app/appContext';
import authContext from '../context/auth/authContext';
import Formulario from './Formulario';
import {
    VISTA_IMAGEN
} from '../types/index';

const Dropzone = () => {


    //Auth Context

    const AuthContext = useContext(authContext);
    const { autenticado } = AuthContext;

    //App Context

    const AppContext = useContext(appContext);
    const { image, cargando, mostrarAlerta, subirArchivo, crearEnlace } = AppContext;

      
    const [imagen, setImagen] = useState();

    const onDropRejected = () => {
        mostrarAlerta('El límite es de 1MB, crea una cuenta');
    }

    const onDropAccepted = useCallback(async (acceptedFiles) => {

        
          
        setImagen(URL.createObjectURL(acceptedFiles[0]));
        const image = [URL.createObjectURL(acceptedFiles[0])];
        // Crea un form-data
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('image', image[0]);
        subirArchivo(formData, acceptedFiles[0].path);
    }, []);
    
    // Extraer contenido de dropzone

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 111111111 });

    const archivos = acceptedFiles.map(file => (
        <li
            className='bg-white flex-1 p-3 mb-4 shadow-lg rounded'
            key={file.lastModified}>
            <img src={imagen} />
            <p className='font-bold text-xl break-all'>{file.path}</p>
            <p className='text-xl text-gray-500 mt-2'>{(file.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
        </li>
    ));
    
    return (
        <div className='md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4'>
            { acceptedFiles.length > 0 ? (
                <div className='mt-10 w-full'>
                    <h4 className='text-2xl font-bold text-center mb-4'>Archivos</h4>
                    <ul>
                        {archivos}
                    </ul>

                    {
                        autenticado ? (
                            <Formulario />
                        ) : null
                    }
                    { cargando ? <div className='flex justify-center'><Loader type='Oval' color='Blue' size={10} className='my-10' /></div> : <button
                        type='button'
                        className='bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800'
                        onClick={() => { crearEnlace() }}
                    >
                        Crear Enlace
                    </button>}

                </div>

            ) : (
                    <div
                        {...getRootProps({ className: 'dropzone w-full py-32' })}
                    >
                        <input className='h-100' {...getInputProps()} />
                        {isDragActive ? (
                            <p className='text-2xl text-center text-gray-600'>
                                Suelta el archivo
                            </p>
                        )
                            : (
                                <div className='text-center'>

                                    <p className='text-2xl text-center text-gray-600'>
                                        Arrastra un archivo aquí
                            </p>
                                    <button
                                        className='bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800'
                                        type='button'>
                                        Selecciona archivos para subir
                                    </button>
                                </div>
                            )}

                    </div>
                )}


        </div>
    );
}

export default Dropzone;
