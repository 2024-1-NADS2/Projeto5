import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ONGs from '../components/ONGs/ONGs';

function ONG(){
    return(
        <div>
        <Header />
        <h1 style={{textAlign: 'center'}}>ONGs</h1>
        <ONGs />
        <Footer />
        </div>
    );
}
export default ONG;