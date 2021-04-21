import React, { useReducer, useEffect, useRef } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LIMPIAR_ALERTA,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types/index';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import router from 'next/router';

const AuthState = ({ children }) => {

    //Definir state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Registrar usuario
    const registrarUsuario = async datos => {
        
        try {
            const respuesta = await clientAxios.post('/api/users', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.token
            });
            router.push('/');

        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })

        }       
        
    }

    //Iniciar Sesión
    const iniciarSesion = async datos => {
        
        
        try {
            const respuesta = await clientAxios.post('api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
                
            });
            router.push('/');
            

        } catch (error) {
            
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }


    // Limpiar alerta
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const close = () => setTimeout(() => dispatch({ type: LIMPIAR_ALERTA }), 3000);

            const timerId = close();
            return () => {
                clearTimeout(timerId);
            };
        } else {
            isMounted.current = true;
        }
    }, [state.mensaje]);


    // Retorna el usuario autenticado en base al JWT
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        
        try {
            const respuesta = await clientAxios.get('/api/auth');
            if (respuesta.data.user) {
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: respuesta.data.user
                })
                
            }

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    // Cerrar sesion

    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
        
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion

            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;