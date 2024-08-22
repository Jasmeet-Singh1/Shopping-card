import React, { useState } from 'react';

const Cart = ({ products, selectedProductIds, setSelectedProductIds }) => {
  var totalPrice = 0;
  const selectedProducts = products.filter((item) => selectedProductIds.includes(item.id));

  function handleRemoveProduct(id) {
    const filtertedArray = selectedProductIds.filter((item) => item !== id);

    setSelectedProductIds(filtertedArray);
  }

  return (
    <div className='flex flex-col gap-7 text-white border border-black px-6 pt-4'>
      <div>Shopping Cart</div>
      <div>You have {selectedProductIds.length} products in your cart</div>
      <div className='flex flex-row gap-5'>
        <div className='flex flex-col'>
          <div>Products</div>
          <div className='flex flex-col'>
            {selectedProducts.map((item, index) => {
              return (
                <div key={index} className='flex flex-row gap-4'>
                  <button onClick={() => handleRemoveProduct(item.id)}>-</button>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col'>
          <div>Quantity</div>
          <div className='flex flex-col'>
            {selectedProducts.map((item, index) => {
              return <div key={index}> {item.quantity} </div>;
            })}
          </div>
        </div>
        <div className='flex flex-col'>
          <div>Price</div>
          <div className='flex flex-col'>
            {selectedProducts.map((item, index) => {
              return <div key={index}> ${item.price} </div>;
            })}
          </div>
        </div>
      </div>
      <div className='px-28'>
        Total Price:
        {selectedProducts.map((item, index) => {
          totalPrice = totalPrice + item.price;
        })}
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
