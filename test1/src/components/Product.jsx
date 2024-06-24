import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/productSlice";
import store from "../store/store";

function Product(props) {
  const [added, isadded] = useState(false);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { title, descprition, img } = props;

  const handleAdd = (e) => {
    e.preventDefault();
    const product = {
      id: Math.random(),
      title: title,
      descprition: descprition,
      img: img,
    };
    dispatch(addProduct(product));
    isadded(true);
  };

  const handleRemove = (id) => { 
    dispatch(removeProduct({id}));
    isadded(false);
  };
                

  return (
    <>
      <div
        style={{ border: "2px solid black", width: "300px", height: "300px" }}
      >
        <img src={img} alt="dunno" />
        <h2>{title}</h2>
        <h4>{descprition}</h4>
        <button onClick={added ? () => handleRemove(props.id) : handleAdd}>
          {added ? "Remove" : "Add"}
        </button>
      </div>
    </>
  );
}

export default Product;
