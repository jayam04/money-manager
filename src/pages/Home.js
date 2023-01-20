import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/Footer";
import { readUserData, writeUserData} from '../js/database';
import { authUser } from '../js/database';

import './Home.sass';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <button className='mdc-button'>
//     <span class="mdc-button__ripple"></span>
//     <span class="mdc-button__touch"></span>
//     <span className='mdc-button__focus-ring'></span>
//       hello
//     </button>
//     <Footer />
//     <App />
//   </React.StrictMode>
// );

function Home() {
    return (
        <React.StrictMode>
            <a href='/dashboard'>dashboard</a>

            <button className='mdc-button' onClick={writeUserData('jayam04', 'Jayam Patel', 'jayam04@proton.me', 'https://avatars.githubusercontent.com/u/93824505?v=4')}>
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__touch"></span>
            <span className='mdc-button__focus-ring'></span>
                hello
            </button>

            <button className='mdc-button' onClick={readUserData('jayam04')}>
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__touch"></span>
            <span className='mdc-button__focus-ring'></span>
                hello
            </button>

            <button className='mdc-button' onClick={authUser('jympatel75@gmail.com')}>
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__touch"></span>
            <span className='mdc-button__focus-ring'></span>
                hello
            </button>
            <Footer />

        </React.StrictMode>
    );
}

export default Home;