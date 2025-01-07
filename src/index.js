import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import Test from './test';
import Prototype from './prototype';
import Promo from './Promo';
import ProductGallery from './productGallery';
import Test2 from './Test2';
import Product from './product';
import Footer from './Footer';
import Promo2 from './Promo2';
import Promo1 from './Promo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // <Test2 />
    // <Promo/>
    // <ProductGallery/>
    // <Product/>
    // <Promo2/>
    // <Footer/>
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
