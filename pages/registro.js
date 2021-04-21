import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import Alerta from '../components/Alerta';
import router from 'next/router'
const CrearCuenta = () => {

    // Acceder al state
    const AuthContext = useContext(authContext);
    const { token, autenticado, mensaje, registrarUsuario } = AuthContext;

    //Formulario y validación con Formik y Yup

    useEffect(() => {
        if (token) {
            router.push('/')
        }


    }, [autenticado])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('El nombre es obligatorio'),
            email: Yup.string()
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('El password es obligatorio')
                .min(6, 'El password debe ser de al menos 6 caracteres')

        }),
        onSubmit: valores => {
            registrarUsuario(valores)
        }
    })

    return (
        <Layout>

            <div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>
                <h2 className='text-4xl font-sans font-bold font-grey-800 text-center my-4'>Crear Cuenta</h2>
                {mensaje ? <Alerta /> : null}
                <div className='flex justify-center mt-5'>
                    <div className='w-full max-w-lg'>
                        <form
                            className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                            onSubmit={formik.handleSubmit}
                        >
                            <div className='mb-4'>
                                <label
                                    className='block text-black text-sm font-bold mb-2'
                                    htmlFor='name'
                                >
                                    Nombre
                                </label>
                                <input
                                    type='text'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='name'
                                    placeholder='Escribe tu nombre'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    autoComplete="username"
                                >

                                </input>
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className='font-bold'> Error</p>
                                        <p>{formik.errors.name}</p>
                                    </div>
                                ) : null
                                }
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='block text-black text-sm font-bold mb-2'
                                    htmlFor='email'
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='email'
                                    placeholder='Escribe tu email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    autoComplete="email"
                                >
                                </input>

                                {formik.touched.email && formik.errors.email ? (
                                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className='font-bold'> Error</p>
                                        <p>{formik.errors.email}</p>
                                    </div>
                                ) : null
                                }
                            </div>
                            <div className='mb-4'>

                                <label
                                    className='block text-black text-sm font-bold mb-2'
                                    htmlFor='contraseña'
                                >
                                    Contraseña
                                </label>
                                <input
                                    type='password'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='password'
                                    placeholder='Escribe tu contraseña'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    autoComplete="current-password"
                                >
                                </input>

                                {formik.touched.password && formik.errors.password ? (
                                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                        <p className='font-bold'> Error</p>
                                        <p>{formik.errors.password}</p>
                                    </div>
                                ) : null
                                }
                            </div>

                            <input
                                type='submit'
                                className='bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer'
                                value='Crear Cuenta'

                            />

                        </form>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default CrearCuenta;