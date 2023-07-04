import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';  

function OrderPage({ productContent }) {
  return(
    <div>
      <h2>Purchase Products Here</h2>
      <article>
        <h3>What product are you interested in purchasing?</h3>
        <p>Select how many of each item you want with a maximum of 10.</p>
        <table>
          <caption>Avialable Products</caption>
          <thead>
            <tr>
              <th>Product and Company</th>
              <th>Cost</th>
              <th>Choose Amount</th>
            </tr>
          </thead>
          <tbody>
            {productContent.map((productOn, j) => 
              <ProductRow
                product={productOn}
                current={j}
              />
            )}
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </article>
    </div>
  );
}

export default OrderPage;