import React from 'react';

import Footer from "../../components/Home/Footer";


function Home() {
    return (
        <React.StrictMode>
            <a href='/dashboard'>dashboard</a>
            <a href='/about'>About</a>
            <a href='/auth'>Login / Signup</a>
            <Footer />

        </React.StrictMode>
    );
}

export default Home;