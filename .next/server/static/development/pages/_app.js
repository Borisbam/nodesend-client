module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clientAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://borisbam-nodesend-server.herokuapp.com/"
});
/* harmony default export */ __webpack_exports__["default"] = (clientAxios);

/***/ }),

/***/ "./config/tokenAuth.js":
/*!*****************************!*\
  !*** ./config/tokenAuth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./config/axios.js");


const tokenAuth = token => {
  if (token) {
    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tokenAuth);

/***/ }),

/***/ "./context/app/appContext.js":
/*!***********************************!*\
  !*** ./context/app/appContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (appContext);

/***/ }),

/***/ "./context/app/appReducer.js":
/*!***********************************!*\
  !*** ./context/app/appReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const appReducer = (state, action) => {
  switch (action.type) {
    case _types_index__WEBPACK_IMPORTED_MODULE_0__["MOSTRAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["SUBIENDO_ARCHIVO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cargando: true
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        nombre: action.payload.nombre,
        nombre_original: action.payload.nombre_original,
        image: action.payload.image,
        cargando: false
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["VISTA_IMAGEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        imagen: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload,
        cargando: false
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["CREAR_ENLACE_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        url: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_PASSWORD"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        password: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_DESCARGAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        descargas: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: '',
        nombre: '',
        nombre_original: '',
        cargando: false,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./context/app/appState.js":
/*!*********************************!*\
  !*** ./context/app/appState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appContext */ "./context/app/appContext.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ "./context/app/appReducer.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");
var _jsxFileName = "E:\\Cursos\\React\\NodeSend\\client\\context\\app\\appState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AppState = ({
  children
}) => {
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
  }; // Crear dispatch y state

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_appReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Mostrar alerta

  const mostrarAlerta = msg => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["MOSTRAR_ALERTA"],
      payload: msg
    });
    setTimeout(() => {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LIMPIAR_ALERTA"]
      });
    }, 3000);
  }; //Subir archivos al servidor


  const subirArchivo = (formData, nombreArchivo) => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["SUBIENDO_ARCHIVO"]
    });
    setTimeout(async () => {
      try {
        const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/files', formData);
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_4__["SUBIR_ARCHIVO_EXITO"],
          payload: {
            nombre: respuesta.data.archivo,
            nombre_original: nombreArchivo,
            image: respuesta.data.image
          }
        });
      } catch (error) {
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_4__["SUBIR_ARCHIVO_ERROR"],
          payload: error.response.data.msg
        });
      }
    }, 2000);
  };

  const crearEnlace = async () => {
    const data = {
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      downloads: state.descargas,
      password: state.password,
      author: state.autor,
      image: state.image
    };

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/links', data);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["CREAR_ENLACE_EXITO"],
        payload: resultado.data.msg
      });
    } catch (error) {
      console.log(error);
    }
  };

  const limpiarState = () => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LIMPIAR_STATE"]
    });
  }; // Agregar password


  const agregarPassword = password => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["AGREGAR_PASSWORD"],
      payload: password
    });
  }; // Agregar descargas


  const agregarDescargas = descargas => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["AGREGAR_DESCARGAS"],
      payload: descargas
    });
  };

  const agregarImagen = imagen => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["VISTA_IMAGEN"],
      payload: URL.createObjectURL(imagen)
    });
  };

  return __jsx(_appContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppState);

/***/ }),

/***/ "./context/auth/authContext.js":
/*!*************************************!*\
  !*** ./context/auth/authContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (authContext);

/***/ }),

/***/ "./context/auth/authReducer.js":
/*!*************************************!*\
  !*** ./context/auth/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_EXITOSO"]:
      localStorage.setItem('token', action.payload);
      localStorage.setItem('autenticado', true);
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        mensaje: 'Usuario creado correctamente',
        autenticado: true
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["LOGIN_EXITOSO"]:
      localStorage.setItem('token', action.payload);
      localStorage.setItem('autenticado', true);
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        autenticado: true
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: null
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["USUARIO_AUTENTICADO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        autenticado: action.payload ? true : null
      });

    case _types_index__WEBPACK_IMPORTED_MODULE_0__["CERRAR_SESION"]:
      localStorage.removeItem('token');
      localStorage.removeItem('autenticado');
      return _objectSpread(_objectSpread({}, state), {}, {
        autenticado: false,
        usuario: null,
        token: null
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./context/auth/authState.js":
/*!***********************************!*\
  !*** ./context/auth/authState.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\Cursos\\React\\NodeSend\\client\\context\\auth\\authState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AuthState = ({
  children
}) => {
  //Definir state inicial
  const initialState = {
    token: false ? undefined : null,
    autenticado: null,
    usuario: null,
    mensaje: null
  }; //Definir el reducer

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Registrar usuario

  const registrarUsuario = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/users', datos);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: respuesta.data.token
      });
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; //Iniciar Sesión


  const iniciarSesion = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('api/auth', datos);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["LOGIN_EXITOSO"],
        payload: respuesta.data.token
      });
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Limpiar alerta


  const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isMounted.current) {
      const close = () => setTimeout(() => dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["LIMPIAR_ALERTA"]
      }), 3000);

      const timerId = close();
      return () => {
        clearTimeout(timerId);
      };
    } else {
      isMounted.current = true;
    }
  }, [state.mensaje]); // Retorna el usuario autenticado en base al JWT

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
    }

    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/auth');

      if (respuesta.data.user) {
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_3__["USUARIO_AUTENTICADO"],
          payload: respuesta.data.user
        });
      }
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Cerrar sesion


  const cerrarSesion = () => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_3__["CERRAR_SESION"]
    });
  };

  return __jsx(_authContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      registrarUsuario,
      iniciarSesion,
      usuarioAutenticado,
      cerrarSesion
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
var _jsxFileName = "E:\\Cursos\\React\\NodeSend\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, LIMPIAR_ALERTA, SUBIENDO_ARCHIVO, SUBIR_ARCHIVO_EXITO, SUBIR_ARCHIVO_ERROR, CREAR_ENLACE_EXITO, CREAR_ENLACE_ERROR, LIMPIAR_STATE, AGREGAR_PASSWORD, AGREGAR_DESCARGAS, VISTA_IMAGEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_EXITOSO", function() { return REGISTRO_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_ERROR", function() { return REGISTRO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXITOSO", function() { return LOGIN_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO_AUTENTICADO", function() { return USUARIO_AUTENTICADO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERRAR_SESION", function() { return CERRAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOSTRAR_ALERTA", function() { return MOSTRAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_ALERTA", function() { return LIMPIAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIENDO_ARCHIVO", function() { return SUBIENDO_ARCHIVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_EXITO", function() { return SUBIR_ARCHIVO_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_ERROR", function() { return SUBIR_ARCHIVO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_EXITO", function() { return CREAR_ENLACE_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_ERROR", function() { return CREAR_ENLACE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_STATE", function() { return LIMPIAR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_PASSWORD", function() { return AGREGAR_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_DESCARGAS", function() { return AGREGAR_DESCARGAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISTA_IMAGEN", function() { return VISTA_IMAGEN; });
const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
const REGISTRO_ERROR = 'REGISTRO_ERROR';
const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const CERRAR_SESION = 'CERRAR_SESION';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const LIMPIAR_ALERTA = 'REGISTRO_ERROR';
const SUBIENDO_ARCHIVO = 'SUBIENDO_ARCHIVO';
const SUBIR_ARCHIVO_EXITO = 'SUBIR_ARCHIVO_EXITO';
const SUBIR_ARCHIVO_ERROR = 'SUBIR_ARCHIVO_ERROR';
const CREAR_ENLACE_EXITO = 'CREAR_ENLACE_EXITO';
const CREAR_ENLACE_ERROR = 'CREAR_ENLACE_ERROR';
const LIMPIAR_STATE = 'LIMPIAR_STATE';
const AGREGAR_PASSWORD = 'AGREGAR_PASSWORD';
const AGREGAR_DESCARGAS = 'AGREGAR_DESCARGAS';
const VISTA_IMAGEN = 'VISTA_IMAGEN';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNsaWVudEF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImJhY2tlbmRVUkwiLCJ0b2tlbkF1dGgiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1PU1RSQVJfQUxFUlRBIiwibWVuc2FqZV9hcmNoaXZvIiwicGF5bG9hZCIsIkxJTVBJQVJfQUxFUlRBIiwiU1VCSUVORE9fQVJDSElWTyIsImNhcmdhbmRvIiwiU1VCSVJfQVJDSElWT19FWElUTyIsIm5vbWJyZSIsIm5vbWJyZV9vcmlnaW5hbCIsImltYWdlIiwiVklTVEFfSU1BR0VOIiwiaW1hZ2VuIiwiU1VCSVJfQVJDSElWT19FUlJPUiIsIkNSRUFSX0VOTEFDRV9FWElUTyIsInVybCIsIkFHUkVHQVJfUEFTU1dPUkQiLCJwYXNzd29yZCIsIkFHUkVHQVJfREVTQ0FSR0FTIiwiZGVzY2FyZ2FzIiwiTElNUElBUl9TVEFURSIsImF1dG9yIiwiQXBwU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIm1vc3RyYXJBbGVydGEiLCJtc2ciLCJzZXRUaW1lb3V0Iiwic3ViaXJBcmNoaXZvIiwiZm9ybURhdGEiLCJub21icmVBcmNoaXZvIiwicmVzcHVlc3RhIiwicG9zdCIsImRhdGEiLCJhcmNoaXZvIiwiZXJyb3IiLCJyZXNwb25zZSIsImNyZWFyRW5sYWNlIiwiZG93bmxvYWRzIiwiYXV0aG9yIiwicmVzdWx0YWRvIiwiY29uc29sZSIsImxvZyIsImxpbXBpYXJTdGF0ZSIsImFncmVnYXJQYXNzd29yZCIsImFncmVnYXJEZXNjYXJnYXMiLCJhZ3JlZ2FySW1hZ2VuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXV0aENvbnRleHQiLCJhdXRoUmVkdWNlciIsIlJFR0lTVFJPX0VYSVRPU08iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibWVuc2FqZSIsImF1dGVudGljYWRvIiwiUkVHSVNUUk9fRVJST1IiLCJMT0dJTl9FWElUT1NPIiwiTE9HSU5fRVJST1IiLCJVU1VBUklPX0FVVEVOVElDQURPIiwidXN1YXJpbyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwicmVnaXN0cmFyVXN1YXJpbyIsImRhdG9zIiwicm91dGVyIiwicHVzaCIsImluaWNpYXJTZXNpb24iLCJpc01vdW50ZWQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY2xvc2UiLCJ0aW1lcklkIiwiY2xlYXJUaW1lb3V0IiwidXN1YXJpb0F1dGVudGljYWRvIiwiZ2V0SXRlbSIsImdldCIsInVzZXIiLCJjZXJyYXJTZXNpb24iLCJNeUFwcCIsIkNvbXBv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Qyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERjtBQU9EOztBQUVjRixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNOUIsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUssY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1FLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU05RCxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUcsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1NLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU13RSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHQSxNQUFNbEUsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUosZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTVAsWUFBWSxHQUFHLGNBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGNsaWVudEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRBeGlvczsiLCJpbXBvcnQgY2xpZW50QXhpb3MgZnJvbSAnLi9heGlvcyc7XHJcblxyXG5jb25zdCB0b2tlbkF1dGggPSB0b2tlbiA9PiB7XHJcbiAgICBpZih0b2tlbikge1xyXG4gICAgICAgIGNsaWVudEF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDsgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSBjbGllbnRBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2tlbkF1dGg7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBDb250ZXh0OyIsImltcG9ydCB7XHJcbiAgICBMSU1QSUFSX0FMRVJUQSxcclxuICAgIE1PU1RSQVJfQUxFUlRBLFxyXG4gICAgU1VCSUVORE9fQVJDSElWTyxcclxuICAgIFNVQklSX0FSQ0hJVk9fRVJST1IsXHJcbiAgICBTVUJJUl9BUkNISVZPX0VYSVRPLFxyXG4gICAgQ1JFQVJfRU5MQUNFX0VYSVRPLFxyXG4gICAgTElNUElBUl9TVEFURSxcclxuICAgIEFHUkVHQVJfUEFTU1dPUkQsXHJcbiAgICBBR1JFR0FSX0RFU0NBUkdBUyxcclxuICAgIFZJU1RBX0lNQUdFTlxyXG59IGZyb20gJy4uLy4uL3R5cGVzL2luZGV4JztcclxuXHJcbmNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlIE1PU1RSQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMSU1QSUFSX0FMRVJUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBTVUJJRU5ET19BUkNISVZPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTVUJJUl9BUkNISVZPX0VYSVRPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub21icmU6IGFjdGlvbi5wYXlsb2FkLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogYWN0aW9uLnBheWxvYWQubm9tYnJlX29yaWdpbmFsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGFjdGlvbi5wYXlsb2FkLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBWSVNUQV9JTUFHRU46XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VuOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgU1VCSVJfQVJDSElWT19FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQ1JFQVJfRU5MQUNFX0VYSVRPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX1BBU1NXT1JEOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFHUkVHQVJfREVTQ0FSR0FTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjYXJnYXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86ICcnLFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcclxuICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogJycsXHJcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjYXJnYXM6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4vYXBwQ29udGV4dCc7XHJcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XHJcbmltcG9ydCBjbGllbnRBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE1PU1RSQVJfQUxFUlRBLFxyXG4gICAgTElNUElBUl9BTEVSVEEsXHJcbiAgICBTVUJJRU5ET19BUkNISVZPLFxyXG4gICAgU1VCSVJfQVJDSElWT19FWElUTyxcclxuICAgIFNVQklSX0FSQ0hJVk9fRVJST1IsXHJcbiAgICBDUkVBUl9FTkxBQ0VfRVhJVE8sXHJcbiAgICBBR1JFR0FSX1BBU1NXT1JELFxyXG4gICAgTElNUElBUl9TVEFURSxcclxuICAgIEFHUkVHQVJfREVTQ0FSR0FTLFxyXG4gICAgVklTVEFfSU1BR0VOXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvaW5kZXgnO1xyXG5cclxuY29uc3QgQXBwU3RhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG1lbnNhamVfYXJjaGl2bzogJycsXHJcbiAgICAgICAgbm9tYnJlOiAnJyxcclxuICAgICAgICBub21icmVfb3JpZ2luYWw6ICcnLFxyXG4gICAgICAgIGNhcmdhbmRvOiBmYWxzZSxcclxuICAgICAgICBkZXNjYXJnYXM6IDEsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGF1dG9yOiBudWxsLFxyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhciBkaXNwYXRjaCB5IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gTW9zdHJhciBhbGVydGFcclxuXHJcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gbXNnID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBNT1NUUkFSX0FMRVJUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDogbXNnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogTElNUElBUl9BTEVSVEEgfSlcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1N1YmlyIGFyY2hpdm9zIGFsIHNlcnZpZG9yXHJcblxyXG4gICAgY29uc3Qgc3ViaXJBcmNoaXZvID0gKGZvcm1EYXRhLCBub21icmVBcmNoaXZvKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTVUJJRU5ET19BUkNISVZPXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRBeGlvcy5wb3N0KCcvYXBpL2ZpbGVzJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNVQklSX0FSQ0hJVk9fRVhJVE8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmU6IHJlc3B1ZXN0YS5kYXRhLmFyY2hpdm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogbm9tYnJlQXJjaGl2byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3B1ZXN0YS5kYXRhLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogU1VCSVJfQVJDSElWT19FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhckVubGFjZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBub21icmU6IHN0YXRlLm5vbWJyZSxcclxuICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiBzdGF0ZS5ub21icmVfb3JpZ2luYWwsXHJcbiAgICAgICAgICAgIGRvd25sb2Fkczogc3RhdGUuZGVzY2FyZ2FzLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGF1dGhvcjogc3RhdGUuYXV0b3IsXHJcbiAgICAgICAgICAgIGltYWdlOiBzdGF0ZS5pbWFnZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50QXhpb3MucG9zdCgnL2FwaS9saW5rcycsIGRhdGEpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDUkVBUl9FTkxBQ0VfRVhJVE8sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTElNUElBUl9TVEFURVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWdyZWdhciBwYXNzd29yZFxyXG4gICAgY29uc3QgYWdyZWdhclBhc3N3b3JkID0gcGFzc3dvcmQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9QQVNTV09SRCxcclxuICAgICAgICAgICAgcGF5bG9hZDogcGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFncmVnYXIgZGVzY2FyZ2FzXHJcbiAgICBjb25zdCBhZ3JlZ2FyRGVzY2FyZ2FzID0gZGVzY2FyZ2FzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfREVTQ0FSR0FTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkZXNjYXJnYXNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJJbWFnZW4gPSBpbWFnZW4gPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVklTVEFfSU1BR0VOLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlbilcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogc3RhdGUubWVuc2FqZV9hcmNoaXZvLFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlOiBzdGF0ZS5ub21icmUsXHJcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6IHN0YXRlLm5vbWJyZV9vcmlnaW5hbCxcclxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcclxuICAgICAgICAgICAgICAgIGRlc2Nhcmdhczogc3RhdGUuZGVzY2FyZ2FzLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgYXV0b3I6IHN0YXRlLmF1dG9yLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBzdGF0ZS51cmwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogc3RhdGUuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhLFxyXG4gICAgICAgICAgICAgICAgc3ViaXJBcmNoaXZvLFxyXG4gICAgICAgICAgICAgICAgY3JlYXJFbmxhY2UsXHJcbiAgICAgICAgICAgICAgICBsaW1waWFyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyRGVzY2FyZ2FzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhckltYWdlblxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwU3RhdGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXHJcbiAgICBSRUdJU1RST19FWElUT1NPLFxyXG4gICAgUkVHSVNUUk9fRVJST1IsXHJcbiAgICBMSU1QSUFSX0FMRVJUQSxcclxuICAgIExPR0lOX0VYSVRPU08sXHJcbiAgICBMT0dJTl9FUlJPUixcclxuICAgIENFUlJBUl9TRVNJT05cclxuXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvaW5kZXgnO1xyXG5cclxuY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWN0aW9uLnBheWxvYWQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0ZW50aWNhZG8nLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogJ1VzdWFyaW8gY3JlYWRvIGNvcnJlY3RhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFJFR0lTVFJPX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9FWElUT1NPOlxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRlbnRpY2FkbycsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExJTVBJQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBVU1VBUklPX0FVVEVOVElDQURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBhY3Rpb24ucGF5bG9hZCA/IHRydWUgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYXNlIENFUlJBUl9TRVNJT046XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0ZW50aWNhZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcclxuICAgIFJFR0lTVFJPX0VSUk9SLFxyXG4gICAgTElNUElBUl9BTEVSVEEsXHJcbiAgICBMT0dJTl9FUlJPUixcclxuICAgIExPR0lOX0VYSVRPU08sXHJcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxyXG4gICAgQ0VSUkFSX1NFU0lPTlxyXG59IGZyb20gJy4uLy4uL3R5cGVzL2luZGV4JztcclxuaW1wb3J0IGNsaWVudEF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcbmltcG9ydCB0b2tlbkF1dGggZnJvbSAnLi4vLi4vY29uZmlnL3Rva2VuQXV0aCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQXV0aFN0YXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIC8vRGVmaW5pciBzdGF0ZSBpbmljaWFsXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsLFxyXG4gICAgICAgIGF1dGVudGljYWRvOiBudWxsLFxyXG4gICAgICAgIHVzdWFyaW86IG51bGwsXHJcbiAgICAgICAgbWVuc2FqZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vRGVmaW5pciBlbCByZWR1Y2VyXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gUmVnaXN0cmFyIHVzdWFyaW9cclxuICAgIGNvbnN0IHJlZ2lzdHJhclVzdWFyaW8gPSBhc3luYyBkYXRvcyA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50QXhpb3MucG9zdCgnL2FwaS91c2VycycsIGRhdG9zKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVhJVE9TTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnRva2VuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9JbmljaWFyIFNlc2nDs25cclxuICAgIGNvbnN0IGluaWNpYXJTZXNpb24gPSBhc3luYyBkYXRvcyA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50QXhpb3MucG9zdCgnYXBpL2F1dGgnLCBkYXRvcyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS50b2tlblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTGltcGlhciBhbGVydGFcclxuICAgIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNUElBUl9BTEVSVEEgfSksIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZXJJZCA9IGNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGF0ZS5tZW5zYWplXSk7XHJcblxyXG5cclxuICAgIC8vIFJldG9ybmEgZWwgdXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxyXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudEF4aW9zLmdldCgnL2FwaS9hdXRoJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwdWVzdGEuZGF0YS51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS51c2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDZXJyYXIgc2VzaW9uXHJcblxyXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcclxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgQXV0aFN0YXRlIGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUnXHJcbmltcG9ydCBBcHBTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBTdGF0ZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoU3RhdGU+XHJcbiAgICAgIDxBcHBTdGF0ZT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXBwU3RhdGU+XHJcbiAgICA8L0F1dGhTdGF0ZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xyXG5leHBvcnQgY29uc3QgUkVHSVNUUk9fRVJST1IgPSAnUkVHSVNUUk9fRVJST1InO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9ICdMT0dJTl9FUlJPUic7XHJcblxyXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcclxuZXhwb3J0IGNvbnN0IENFUlJBUl9TRVNJT04gPSAnQ0VSUkFSX1NFU0lPTic7XHJcblxyXG5leHBvcnQgY29uc3QgTU9TVFJBUl9BTEVSVEEgPSAnTU9TVFJBUl9BTEVSVEEnO1xyXG5leHBvcnQgY29uc3QgTElNUElBUl9BTEVSVEEgPSAnUkVHSVNUUk9fRVJST1InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNVQklFTkRPX0FSQ0hJVk8gPSAnU1VCSUVORE9fQVJDSElWTyc7XHJcbmV4cG9ydCBjb25zdCBTVUJJUl9BUkNISVZPX0VYSVRPID0gJ1NVQklSX0FSQ0hJVk9fRVhJVE8nO1xyXG5leHBvcnQgY29uc3QgU1VCSVJfQVJDSElWT19FUlJPUiA9ICdTVUJJUl9BUkNISVZPX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBUl9FTkxBQ0VfRVhJVE8gPSAnQ1JFQVJfRU5MQUNFX0VYSVRPJztcclxuZXhwb3J0IGNvbnN0IENSRUFSX0VOTEFDRV9FUlJPUiA9ICdDUkVBUl9FTkxBQ0VfRVJST1InO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMSU1QSUFSX1NUQVRFID0gJ0xJTVBJQVJfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgQUdSRUdBUl9QQVNTV09SRCA9ICdBR1JFR0FSX1BBU1NXT1JEJztcclxuZXhwb3J0IGNvbnN0IEFHUkVHQVJfREVTQ0FSR0FTID0gJ0FHUkVHQVJfREVTQ0FSR0FTJztcclxuXHJcbmV4cG9ydCBjb25zdCBWSVNUQV9JTUFHRU4gPSAnVklTVEFfSU1BR0VOJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9