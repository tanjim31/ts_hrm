import React from 'react';
import Header from './Header';
import Footer from './Footer';

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{minHeight:"81vh"}}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default FrontendLayout;