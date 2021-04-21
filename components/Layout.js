import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Head>

                <title>Node Send</title>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

            </Head>

            

            <div className='bg-gray-100 min-h-screen'>
                <div className='container mx-auto'>
                    <Header />
                    <main className='mt-20 min-h-screen'>
                        {children}
                    </main>
                </div>

            </div>
        </>
    );
}

export default Layout;