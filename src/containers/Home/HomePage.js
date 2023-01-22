import React from 'react';

import NavigationBar from '../../components/shared/Navigation/NavigationBar';
import Footer from "../../components/Home/Footer/Footer";


function Home() {
    return (
        <React.StrictMode>

            {NavigationBar('MONYMNGR')}
            <Footer />

        </React.StrictMode>
    );
}

export default Home;