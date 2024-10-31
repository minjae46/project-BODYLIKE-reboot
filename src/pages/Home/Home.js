import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Carousel from './Carousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.scss';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      'http://10.58.0.117:3000/product/list?page=1&pageSize=9&orderBy=price',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="home">
        <div className="homeWrapper">
          <Carousel />
          <div className="titleMain">
            <h1 className="bigTitle">BEST SELLER</h1>
            <h2 className="description">
              "바디라이크의 베스트 아이템을 만나보세요!"
            </h2>
          </div>
          <div className="productList">
            {products.map(product => {
              return (
                <Link
                  className="link"
                  key={product.id}
                  to={`/product/${product.id}`}
                >
                  <ProductCard key={product.id} product={product} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
