import React from 'react';

import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Footer from "./Footer";


function Home() {
    return (
        <React.StrictMode>

            {NavigationBar('MONYMNGR')}
            <Footer />

        </React.StrictMode>
    );
}

export default Home;