import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LIMPIAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION

} from '../../types/index';

const authReducer = (state, action) => {
    switch (action.type) {

        default:
            return state;

        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload);            
            localStorage.setItem('autenticado', true);
            return {
                ...state,
                token: action.payload,
                mensaje: 'Usuario creado correctamente',
                autenticado: true
            }

        case REGISTRO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('autenticado', true);
            return {
                ...state,
                token: action.payload,
                autenticado: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje: null
            }

        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: action.payload ? true : null
            }
        
        case CERRAR_SESION:
            localStorage.removeItem('token');
            localStorage.removeItem('autenticado');
            return{
                ...state,
                autenticado: false,
                usuario: null,
                token: null
            }
    }
}

export default authReducer;