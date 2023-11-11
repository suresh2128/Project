import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

  const CartList = () => {
    const [carts, setCart] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/getitems")
        .then((response) => {
          console.log(response.data.cart);
          setCart(response.data.cart);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const handleDelete = (cartId) => {
      if (cartId) {
        axios.delete(`http://localhost:5000/deleteitem/${cartId}`)
          .then(() => {
            alert('Deleted Successfully');
            setCart(carts.filter(cart => cart._id !== cartId));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

  const blk = (v) => {
    v.target.style.backgroundColor = 'red'
    v.target.style.color = 'black'
    v.target.style.fontWeight = 'bold'
    v.target.style.border = 'none'
  }

  const lkb = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = 'white'
    v.target.style.fontWeight = 'normal'
  }

  return (
    <div style={{ backgroundColor: '#bababa' }}>
      <div className='col-md-3'>
                <Link to={'/'}><img style={{cursor:'pointer', width:'100%',height:'100px'}} href="" src="https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300" alt="Logo" /></Link>
            </div>
            <div className="col-md-6 mt-5">
              <h1>Cart</h1>
            </div>
            <div className="col-md-3 mt-5">
              <Link to={'/shop'}><button onMouseOver={blk} onMouseLeave={lkb} className="btn0">Shop</button></Link>
            </div>
      <div className="row mt-5">
        <div className="col-md-12">
        <table border="" style={{ width: "100%" }}>
          <thead style={{ backgroundColor: 'black', color: 'white', fontSize: '20px' }}>
            <tr>
              <th>Sl.no</th>
              <th>Product</th>
              <th>name</th>
              <th>Price</th>
              <th>Remove from cart</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '15px' }}>
  {carts && carts.map((item, index) => (
    <tr key={index}>
      <td><b>{index + 1}.</b></td>
      <td><b>{item.brand}</b></td>
      <td><b>{item.name}</b></td>
      <td><b>{item.price}</b></td>
      <td>
        <button
          style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '8px', borderRadius: '8px' }}
          onClick={() => handleDelete(item._id)}>Remove</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
        </div>
      </div>
    </div>
  );
};

export default CartList;
