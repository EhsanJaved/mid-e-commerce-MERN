import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="text-gray-900 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {allProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
                key={item.id}
              >
                <div className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img
                    src={item.image}
                    loading="lazy"
                    alt="Photo by Nick Karvounis"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      {item.title}
                    </a>
                    <span className="text-gray-500">{item.category}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
