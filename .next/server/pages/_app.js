module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
  baseURL: "localhost:4000"
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

const appContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appContext */ "./context/app/appContext.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appReducer */ "./context/app/appReducer.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");

var _jsxFileName = "C:\\Users\\Boris\\Desktop\\React\\NodeSend\\client\\context\\app\\appState.js";






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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_appReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState); // Mostrar alerta

  const mostrarAlerta = msg => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["MOSTRAR_ALERTA"],
      payload: msg
    });
    setTimeout(() => {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_5__["LIMPIAR_ALERTA"]
      });
    }, 3000);
  }; //Subir archivos al servidor


  const subirArchivo = (formData, nombreArchivo) => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["SUBIENDO_ARCHIVO"]
    });
    setTimeout(async () => {
      try {
        const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/files', formData);
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_5__["SUBIR_ARCHIVO_EXITO"],
          payload: {
            nombre: respuesta.data.archivo,
            nombre_original: nombreArchivo,
            image: respuesta.data.image
          }
        });
      } catch (error) {
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_5__["SUBIR_ARCHIVO_ERROR"],
          payload: error.response.data.msg
        });
      }
    }, 2000);
  };

  const crearEnlace = async () => {
    const data = {
      name: state.nombre,
      original_name: state.nombre_original,
      downloads: state.descargas,
      password: state.password,
      author: state.autor,
      image: state.image
    };

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/links', data);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_5__["CREAR_ENLACE_EXITO"],
        payload: resultado.data.msg
      });
    } catch (error) {}
  };

  const limpiarState = () => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["LIMPIAR_STATE"]
    });
  }; // Agregar password


  const agregarPassword = password => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["AGREGAR_PASSWORD"],
      payload: password
    });
  }; // Agregar descargas


  const agregarDescargas = descargas => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["AGREGAR_DESCARGAS"],
      payload: descargas
    });
  };

  const agregarImagen = imagen => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_5__["VISTA_IMAGEN"],
      payload: URL.createObjectURL(imagen)
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_appContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, undefined);
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

const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/index */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Boris\\Desktop\\React\\NodeSend\\client\\context\\auth\\authState.js";








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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState); // Registrar usuario

  const registrarUsuario = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/api/users', datos);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["REGISTRO_EXITOSO"],
        payload: respuesta.data.token
      });
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["REGISTRO_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; //Iniciar Sesión


  const iniciarSesion = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('api/auth', datos);
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LOGIN_EXITOSO"],
        payload: respuesta.data.token
      });
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Limpiar alerta


  const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isMounted.current) {
      const close = () => setTimeout(() => dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LIMPIAR_ALERTA"]
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
      Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(token);
    }

    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_5__["default"].get('/api/auth');

      if (respuesta.data.user) {
        dispatch({
          type: _types_index__WEBPACK_IMPORTED_MODULE_4__["USUARIO_AUTENTICADO"],
          payload: respuesta.data.user
        });
      }
    } catch (error) {
      dispatch({
        type: _types_index__WEBPACK_IMPORTED_MODULE_4__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Cerrar sesion


  const cerrarSesion = () => {
    dispatch({
      type: _types_index__WEBPACK_IMPORTED_MODULE_4__["CERRAR_SESION"]
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, undefined);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/axios */ "./config/axios.js");

var _jsxFileName = "C:\\Users\\Boris\\Desktop\\React\\NodeSend\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_auth_authState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_app_appState__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNsaWVudEF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImJhY2tlbmRVUkwiLCJ0b2tlbkF1dGgiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1PU1RSQVJfQUxFUlRBIiwibWVuc2FqZV9hcmNoaXZvIiwicGF5bG9hZCIsIkxJTVBJQVJfQUxFUlRBIiwiU1VCSUVORE9fQVJDSElWTyIsImNhcmdhbmRvIiwiU1VCSVJfQVJDSElWT19FWElUTyIsIm5vbWJyZSIsIm5vbWJyZV9vcmlnaW5hbCIsImltYWdlIiwiVklTVEFfSU1BR0VOIiwiaW1hZ2VuIiwiU1VCSVJfQVJDSElWT19FUlJPUiIsIkNSRUFSX0VOTEFDRV9FWElUTyIsInVybCIsIkFHUkVHQVJfUEFTU1dPUkQiLCJwYXNzd29yZCIsIkFHUkVHQVJfREVTQ0FSR0FTIiwiZGVzY2FyZ2FzIiwiTElNUElBUl9TVEFURSIsImF1dG9yIiwiQXBwU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIm1vc3RyYXJBbGVydGEiLCJtc2ciLCJzZXRUaW1lb3V0Iiwic3ViaXJBcmNoaXZvIiwiZm9ybURhdGEiLCJub21icmVBcmNoaXZvIiwicmVzcHVlc3RhIiwicG9zdCIsImRhdGEiLCJhcmNoaXZvIiwiZXJyb3IiLCJyZXNwb25zZSIsImNyZWFyRW5sYWNlIiwibmFtZSIsIm9yaWdpbmFsX25hbWUiLCJkb3dubG9hZHMiLCJhdXRob3IiLCJyZXN1bHRhZG8iLCJsaW1waWFyU3RhdGUiLCJhZ3JlZ2FyUGFzc3dvcmQiLCJhZ3JlZ2FyRGVzY2FyZ2FzIiwiYWdyZWdhckltYWdlbiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1dGhDb250ZXh0IiwiYXV0aFJlZHVjZXIiLCJSRUdJU1RST19FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm1lbnNhamUiLCJhdXRlbnRpY2FkbyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVhJVE9TTyIsIkxPR0lOX0VSUk9SIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsInVzdWFyaW8iLCJDRVJSQVJfU0VTSU9OIiwicmVtb3ZlSXRlbSIsIkF1dGhTdGF0ZSIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsInJvdXRlciIsInB1c2giLCJpbmljaWFyU2VzaW9uIiwiaXNNb3VudGVkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNsb3NlIiwidGltZXJJZCIsImNsZWFyVGltZW91dCIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImdldEl0ZW0iLCJnZXQiLCJ1c2VyIiwiY2VycmFyU2VzaW9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQ1JFQVJfRU5MQUNFX0VSUk9SIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDN0JDLFNBQU8sRUFBRUMsZ0JBQXNCQztBQURGLENBQWIsQ0FBcEI7QUFJZUwsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBOztBQUVBLE1BQU1NLFNBQVMsR0FBR0MsS0FBSyxJQUFJO0FBQ3ZCLE1BQUdBLEtBQUgsRUFBVTtBQUNOUCxrREFBVyxDQUFDUSxRQUFaLENBQXFCQyxPQUFyQixDQUE2QkMsTUFBN0IsQ0FBb0MsZUFBcEMsSUFBd0Qs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Qyw2REFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWdCQSxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBVEQ7O0FBV2VGLGtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNOUIsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUssY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1FLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU05RCxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUcsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1NLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU13RSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHQSxNQUFNbEUsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUosZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTVAsWUFBWSxHQUFHLGNBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgY2xpZW50QXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuYmFja2VuZFVSTFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudEF4aW9zOyIsImltcG9ydCBjbGllbnRBeGlvcyBmcm9tICcuL2F4aW9zJztcclxuXHJcbmNvbnN0IHRva2VuQXV0aCA9IHRva2VuID0+IHtcclxuICAgIGlmKHRva2VuKSB7XHJcbiAgICAgICAgY2xpZW50QXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gOyBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlIGNsaWVudEF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRva2VuQXV0aDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgYXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIExJTVBJQVJfQUxFUlRBLFxyXG4gICAgTU9TVFJBUl9BTEVSVEEsXHJcbiAgICBTVUJJRU5ET19BUkNISVZPLFxyXG4gICAgU1VCSVJfQVJDSElWT19FUlJPUixcclxuICAgIFNVQklSX0FSQ0hJVk9fRVhJVE8sXHJcbiAgICBDUkVBUl9FTkxBQ0VfRVhJVE8sXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUdSRUdBUl9QQVNTV09SRCxcclxuICAgIEFHUkVHQVJfREVTQ0FSR0FTLFxyXG4gICAgVklTVEFfSU1BR0VOXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvaW5kZXgnO1xyXG5cclxuY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgTU9TVFJBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExJTVBJQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFNVQklFTkRPX0FSQ0hJVk86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNVQklSX0FSQ0hJVk9fRVhJVE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vbWJyZTogYWN0aW9uLnBheWxvYWQubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiBhY3Rpb24ucGF5bG9hZC5ub21icmVfb3JpZ2luYWwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogYWN0aW9uLnBheWxvYWQuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFZJU1RBX0lNQUdFTjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZW46IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBTVUJJUl9BUkNISVZPX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBDUkVBUl9FTkxBQ0VfRVhJVE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVybDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFHUkVHQVJfUEFTU1dPUkQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQUdSRUdBUl9ERVNDQVJHQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGRlc2NhcmdhczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExJTVBJQVJfU1RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogJycsXHJcbiAgICAgICAgICAgICAgICBub21icmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRlc2NhcmdhczogMSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIGF1dG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwUmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcclxuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnLi9hcHBSZWR1Y2VyJztcclxuaW1wb3J0IGNsaWVudEF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTU9TVFJBUl9BTEVSVEEsXHJcbiAgICBMSU1QSUFSX0FMRVJUQSxcclxuICAgIFNVQklFTkRPX0FSQ0hJVk8sXHJcbiAgICBTVUJJUl9BUkNISVZPX0VYSVRPLFxyXG4gICAgU1VCSVJfQVJDSElWT19FUlJPUixcclxuICAgIENSRUFSX0VOTEFDRV9FWElUTyxcclxuICAgIEFHUkVHQVJfUEFTU1dPUkQsXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUdSRUdBUl9ERVNDQVJHQVMsXHJcbiAgICBWSVNUQV9JTUFHRU5cclxufSBmcm9tICcuLi8uLi90eXBlcy9pbmRleCc7XHJcblxyXG5jb25zdCBBcHBTdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiAnJyxcclxuICAgICAgICBub21icmU6ICcnLFxyXG4gICAgICAgIG5vbWJyZV9vcmlnaW5hbDogJycsXHJcbiAgICAgICAgY2FyZ2FuZG86IGZhbHNlLFxyXG4gICAgICAgIGRlc2NhcmdhczogMSxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgYXV0b3I6IG51bGwsXHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWFyIGRpc3BhdGNoIHkgc3RhdGVcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBNb3N0cmFyIGFsZXJ0YVxyXG5cclxuICAgIGNvbnN0IG1vc3RyYXJBbGVydGEgPSBtc2cgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBtc2dcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBMSU1QSUFSX0FMRVJUQSB9KVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU3ViaXIgYXJjaGl2b3MgYWwgc2Vydmlkb3JcclxuXHJcbiAgICBjb25zdCBzdWJpckFyY2hpdm8gPSAoZm9ybURhdGEsIG5vbWJyZUFyY2hpdm8pID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTVUJJRU5ET19BUkNISVZPXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRBeGlvcy5wb3N0KCcvYXBpL2ZpbGVzJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNVQklSX0FSQ0hJVk9fRVhJVE8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmU6IHJlc3B1ZXN0YS5kYXRhLmFyY2hpdm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogbm9tYnJlQXJjaGl2byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3B1ZXN0YS5kYXRhLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogU1VCSVJfQVJDSElWT19FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhckVubGFjZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5ub21icmUsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsX25hbWU6IHN0YXRlLm5vbWJyZV9vcmlnaW5hbCxcclxuICAgICAgICAgICAgZG93bmxvYWRzOiBzdGF0ZS5kZXNjYXJnYXMsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgYXV0aG9yOiBzdGF0ZS5hdXRvcixcclxuICAgICAgICAgICAgaW1hZ2U6IHN0YXRlLmltYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRBeGlvcy5wb3N0KCcvYXBpL2xpbmtzJywgZGF0YSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFSX0VOTEFDRV9FWElUTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW1waWFyU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZ3JlZ2FyIHBhc3N3b3JkXHJcbiAgICBjb25zdCBhZ3JlZ2FyUGFzc3dvcmQgPSBwYXNzd29yZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBR1JFR0FSX1BBU1NXT1JELFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWdyZWdhciBkZXNjYXJnYXNcclxuICAgIGNvbnN0IGFncmVnYXJEZXNjYXJnYXMgPSBkZXNjYXJnYXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9ERVNDQVJHQVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRlc2Nhcmdhc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdyZWdhckltYWdlbiA9IGltYWdlbiA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBWSVNUQV9JTUFHRU4sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2VuKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBzdGF0ZS5tZW5zYWplX2FyY2hpdm8sXHJcbiAgICAgICAgICAgICAgICBub21icmU6IHN0YXRlLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogc3RhdGUubm9tYnJlX29yaWdpbmFsLFxyXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiBzdGF0ZS5kZXNjYXJnYXMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcjogc3RhdGUuYXV0b3IsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHN0YXRlLnVybCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBzdGF0ZS5pbWFnZSxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJBbGVydGEsXHJcbiAgICAgICAgICAgICAgICBzdWJpckFyY2hpdm8sXHJcbiAgICAgICAgICAgICAgICBjcmVhckVubGFjZSxcclxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJEZXNjYXJnYXMsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FySW1hZ2VuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoQ29udGV4dDsiLCJpbXBvcnQge1xyXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcclxuICAgIFJFR0lTVFJPX0VYSVRPU08sXHJcbiAgICBSRUdJU1RST19FUlJPUixcclxuICAgIExJTVBJQVJfQUxFUlRBLFxyXG4gICAgTE9HSU5fRVhJVE9TTyxcclxuICAgIExPR0lOX0VSUk9SLFxyXG4gICAgQ0VSUkFSX1NFU0lPTlxyXG5cclxufSBmcm9tICcuLi8uLi90eXBlcy9pbmRleCc7XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuXHJcbiAgICAgICAgY2FzZSBSRUdJU1RST19FWElUT1NPOlxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRlbnRpY2FkbycsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiAnVXN1YXJpbyBjcmVhZG8gY29ycmVjdGFtZW50ZScsXHJcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR0lOX0VYSVRPU086XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGVudGljYWRvJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTElNUElBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IGFjdGlvbi5wYXlsb2FkID8gdHJ1ZSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjpcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRlbnRpY2FkbycpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XHJcbmltcG9ydCB7XHJcbiAgICBSRUdJU1RST19FWElUT1NPLFxyXG4gICAgUkVHSVNUUk9fRVJST1IsXHJcbiAgICBMSU1QSUFSX0FMRVJUQSxcclxuICAgIExPR0lOX0VSUk9SLFxyXG4gICAgTE9HSU5fRVhJVE9TTyxcclxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXHJcbiAgICBDRVJSQVJfU0VTSU9OXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgY2xpZW50QXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcclxuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBBdXRoU3RhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgLy9EZWZpbmlyIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwsXHJcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXHJcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcclxuICAgICAgICBtZW5zYWplOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy9EZWZpbmlyIGVsIHJlZHVjZXJcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhdXRoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBSZWdpc3RyYXIgdXN1YXJpb1xyXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRBeGlvcy5wb3N0KCcvYXBpL3VzZXJzJywgZGF0b3MpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL0luaWNpYXIgU2VzacOzblxyXG4gICAgY29uc3QgaW5pY2lhclNlc2lvbiA9IGFzeW5jIGRhdG9zID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRBeGlvcy5wb3N0KCdhcGkvYXV0aCcsIGRhdG9zKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVhJVE9TTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnRva2VuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTGltcGlhciBhbGVydGFcclxuICAgIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNUElBUl9BTEVSVEEgfSksIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZXJJZCA9IGNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGF0ZS5tZW5zYWplXSk7XHJcblxyXG5cclxuICAgIC8vIFJldG9ybmEgZWwgdXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxyXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudEF4aW9zLmdldCgnL2FwaS9hdXRoJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwdWVzdGEuZGF0YS51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS51c2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDZXJyYXIgc2VzaW9uXHJcblxyXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcclxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0aFN0YXRlIGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUnO1xuaW1wb3J0IEFwcFN0YXRlIGZyb20gJy4uL2NvbnRleHQvYXBwL2FwcFN0YXRlJztcblxuaW1wb3J0IGNsaWVudEF4aW9zIGZyb20gJy4uL2NvbmZpZy9heGlvcyc7XG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFN0YXRlPlxuICAgICAgPEFwcFN0YXRlPlxuICAgICAgICA8Q29tcG9uZW50ICB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcHBTdGF0ZT5cbiAgICA8L0F1dGhTdGF0ZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgY29uc3QgUkVHSVNUUk9fRVhJVE9TTyA9ICdSRUdJU1RST19FWElUT1NPJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FWElUT1NPID0gJ0xPR0lOX0VYSVRPU08nO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTVUFSSU9fQVVURU5USUNBRE8gPSAnVVNVQVJJT19BVVRFTlRJQ0FETyc7XHJcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PU1RSQVJfQUxFUlRBID0gJ01PU1RSQVJfQUxFUlRBJztcclxuZXhwb3J0IGNvbnN0IExJTVBJQVJfQUxFUlRBID0gJ1JFR0lTVFJPX0VSUk9SJztcclxuXHJcbmV4cG9ydCBjb25zdCBTVUJJRU5ET19BUkNISVZPID0gJ1NVQklFTkRPX0FSQ0hJVk8nO1xyXG5leHBvcnQgY29uc3QgU1VCSVJfQVJDSElWT19FWElUTyA9ICdTVUJJUl9BUkNISVZPX0VYSVRPJztcclxuZXhwb3J0IGNvbnN0IFNVQklSX0FSQ0hJVk9fRVJST1IgPSAnU1VCSVJfQVJDSElWT19FUlJPUic7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVJfRU5MQUNFX0VYSVRPID0gJ0NSRUFSX0VOTEFDRV9FWElUTyc7XHJcbmV4cG9ydCBjb25zdCBDUkVBUl9FTkxBQ0VfRVJST1IgPSAnQ1JFQVJfRU5MQUNFX0VSUk9SJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcclxuZXhwb3J0IGNvbnN0IEFHUkVHQVJfUEFTU1dPUkQgPSAnQUdSRUdBUl9QQVNTV09SRCc7XHJcbmV4cG9ydCBjb25zdCBBR1JFR0FSX0RFU0NBUkdBUyA9ICdBR1JFR0FSX0RFU0NBUkdBUyc7XHJcblxyXG5leHBvcnQgY29uc3QgVklTVEFfSU1BR0VOID0gJ1ZJU1RBX0lNQUdFTic7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=