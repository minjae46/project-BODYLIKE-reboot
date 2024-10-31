import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Search.scss';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('q');

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/search?q=${searchedWord}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, [searchedWord]);

  return (
    <>
      <Nav />
      <div className="search">
        <div className="wrapper">
          {searchedWord === '' ? (
            <span className="pleaseSearch">검색어를 입력해 주세요.</span>
          ) : (
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
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
