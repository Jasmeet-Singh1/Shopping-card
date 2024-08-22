import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, setSelectedProductIds }) => {
  function handleAddToCart(id) {
    setSelectedProductIds((prev) => [...prev, id]);
    toast.success('Added Successfully');
  }
  return (
    <div className=' border-black rounded h-[300px] w-[200px] flex flex-col gap-8 p-3 border-2'>
      <p>{product.name}</p>
      <img src={product.image} className='w-40 h-40' />
      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
