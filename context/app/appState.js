import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import clientAxios from '../../config/axios';

import {
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    SUBIENDO_ARCHIVO,
    SUBIR_ARCHIVO_EXITO,
    SUBIR_ARCHIVO_ERROR,
    CREAR_ENLACE_EXITO,
    AGREGAR_PASSWORD,
    LIMPIAR_STATE,
    AGREGAR_DESCARGAS,
    VISTA_IMAGEN
} from '../../types/index';

const AppState = ({ children }) => {

    const initialState = {
        mensaje_archivo: '',
        nombre: '',
        nombre_original: '',
        cargando: false,
        descargas: 1,
        password: '',
        autor: null,
        url: '',
        image: null
    }

    // Crear dispatch y state

    const [state, dispatch] = useReducer(appReducer, initialState);

    // Mostrar alerta

    const mostrarAlerta = msg => {

        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        })

        setTimeout(() => {
            dispatch({ type: LIMPIAR_ALERTA })
        }, 3000);
    }

    //Subir archivos al servidor

    const subirArchivo = (formData, nombreArchivo) => {

        dispatch({
            type: SUBIENDO_ARCHIVO
        })

        setTimeout(async () => {
            try {
                const respuesta = await clientAxios.post('/api/files', formData);
                dispatch({
                    type: SUBIR_ARCHIVO_EXITO,
                    payload: {
                        nombre: respuesta.data.archivo,
                        nombre_original: nombreArchivo,
                        image: respuesta.data.image
                    }
                })

            } catch (error) {
                dispatch({
                    type: SUBIR_ARCHIVO_ERROR,
                    payload: error.response.data.msg
                })
            }
        }, 2000);

    }

    const crearEnlace = async () => {
        const data = {
            name: state.nombre,
            original_name: state.nombre_original,
            downloads: state.descargas,
            password: state.password,
            author: state.autor,
            image: state.image
        }

        try {
            const resultado = await clientAxios.post('/api/links', data);
            dispatch({
                type: CREAR_ENLACE_EXITO,
                payload: resultado.data.msg
            })
        } catch (error) {

        }
    }

    const limpiarState = () => {
        dispatch({
            type: LIMPIAR_STATE
        })
    }

    // Agregar password
    const agregarPassword = password => {
        dispatch({
            type: AGREGAR_PASSWORD,
            payload: password
        })
    }

    // Agregar descargas
    const agregarDescargas = descargas => {
        dispatch({
            type: AGREGAR_DESCARGAS,
            payload: descargas
        })
    }

    const agregarImagen = imagen => {
        dispatch({
            type: VISTA_IMAGEN,
            payload: URL.createObjectURL(imagen)
        })
        
    }

    return (
        <appContext.Provider
            value={{
                mensaje_archivo: state.mensaje_archivo,
                nombre: state.nombre,
                nombre_original: state.nombre_original,
                cargando: state.cargando,
                descargas: state.descargas,
                password: state.password,
                autor: state.autor,
                url: state.url,
                image: state.image,
                mostrarAlerta,
                subirArchivo,
                crearEnlace,
                limpiarState,
                agregarPassword,
                agregarDescargas,
                agregarImagen
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;