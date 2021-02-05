import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Layout = props => {
    return(
        <>
            <header className="d-flex justify-content-between p-4 bg-secondary text-white align-items-center">

                <div>
                    <h2>
                        Header
                    </h2>
                </div>

                <nav>
                <NavLink to="/" className="text-white">| Home |</NavLink>
                </nav>

            </header>

            <main className="container p-5 m-5">
                {props.children}
            </main>

            <footer className="bg-dark text-white p-3 d-flex justify-content-between">
                <span>
                    Created by: 
                    <strong>kzv-nursultan</strong>
                </span>
                <NavLink to="/" className="text-white">| Home |</NavLink>
            </footer>
        </>
    );
};

export default Layout;