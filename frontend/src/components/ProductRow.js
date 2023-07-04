import React, { useState } from 'react';
import ProductNumber from './ProductNumber';

function ProductRow( {product} ){

    return (
        <tr>
            <td>{product.product} from {product.company}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD',  minimumFractionDigits:2})}</td>
            <td><ProductNumber /></td>
        </tr>
    );
}

export default ProductRow;