import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Newsletter from '../Newsletter/Newsletter';
import Perfumeshop from '../Perfumeshop/Perfumeshop';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Header></Header>
            <Product></Product>
            <Perfumeshop></Perfumeshop>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;