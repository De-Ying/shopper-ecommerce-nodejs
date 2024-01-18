import { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/all-products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/remove-product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo();
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="list-product__main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product__all">
        <hr />
        {
          allProducts.map((product, index) => {
            return (
              <div key={index} className="list-product__main list-product__item">
                  <img className="list-product__icon" src={product.image} alt="" />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img onClick={() => removeProduct(product.id)} className="list-product__remove-icon" src={cross_icon} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ListProduct;
