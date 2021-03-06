import {
    LIMPIAR_ALERTA,
    MOSTRAR_ALERTA,
    SUBIENDO_ARCHIVO,
    SUBIR_ARCHIVO_ERROR,
    SUBIR_ARCHIVO_EXITO,
    CREAR_ENLACE_EXITO,
    LIMPIAR_STATE,
    AGREGAR_PASSWORD,
    AGREGAR_DESCARGAS,
    VISTA_IMAGEN
} from '../../types/index';

const appReducer = (state, action) => {
    switch (action.type) {

        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }

        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }

        case SUBIENDO_ARCHIVO:
            return {
                ...state,
                cargando: true
            }
        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                image: action.payload.image,
                cargando: false
            }

        case VISTA_IMAGEN:
            return{
                ...state,
                imagen: action.payload
            }

        case SUBIR_ARCHIVO_ERROR:
            return {
                ...state,
                mensaje_archivo: action.payload,
                cargando: false
            }

        case CREAR_ENLACE_EXITO:
            return {
                ...state,
                url: action.payload
            }

        case AGREGAR_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case AGREGAR_DESCARGAS:
            return {
                ...state,
                descargas: action.payload
            }

        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: '',
                nombre: '',
                nombre_original: '',
                cargando: false,
                descargas: 1,
                password: '',
                autor: null,
                url: ''
            }

        default:
            return state;
    }
}

export default appReducer;