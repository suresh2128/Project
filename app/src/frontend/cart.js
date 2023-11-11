import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './contact.css'; // Make sure to use the correct CSS file

export default function Cart() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/getcart")
      .then((response) => {
        setData(response.data.coursedata);
        calculateTotalPrice(response.data.coursedata);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const calculateTotalPrice = (cartData) => {
    const total = cartData.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleDelete = (cartId) => {
    if (cartId) {
      if (window.confirm('Are you sure you want to remove this item from the cart?')) {
        axios.delete(`http://localhost:5000/deleteitem/${cartId}`)
          .then(() => {
            alert('Successfully Removed From The Cart');
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
            alert('Failed to remove the item from the cart.');
          });
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all items from the cart?')) {
      axios.delete('http://localhost:5000/clearcart')
        .then(() => {
          alert('Successfully Cleared All Items From The Cart');
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to clear all items from the cart.');
        });
    }
  };

  return (
    <div className='row'>
      <div className='row rakesh'>
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '30px' }}>
          <Link to='/home'>
            <img src='https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300' 
            style={{ height: '50px', width: '100px' }}
            alt=''
          />
          </Link>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '20px', fontSize: '30px', fontFamily: 'showcard' }}>
          <b>#Basket Summary</b>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '20px', fontSize: '20px' }}>
          <button style={{ backgroundColor: 'black', color: 'white' }}>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>Shop</Link>
          </button>
        </div>
      </div>
      <div className="row justify-content-center align-items-center siva" style={{ minHeight: '100vh' }}>
        <div className="col-md-8 siva1">
          <table className="table table-bordered table-striped mt-2" style={{ width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#343a40', color: 'white', fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                <th style={{ width: '10%' }}>SI.No</th>
                <th style={{ width: '20%' }}>Brand</th>
                <th style={{ width: '20%' }}>Name</th>
                <th style={{ width: '15%' }}>Price</th>
                <th style={{ width: '15%' }}>Remove</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px', fontFamily: 'inherit', textAlign: 'center' }}>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '15px', fontWeight: 'bold' }}>{index + 1}</td>
                  <td style={{ fontSize: '15px', fontWeight: '500px', fontFamily: '' }}>{item.brand}</td>
                  <td style={{ fontSize: '15px', fontWeight: '500px' }}>{item.name}</td>
                  <td style={{ fontSize: '15px', fontWeight: '500px' }}>{item.price}</td>
                  <td><button className="btn btn-sm btn-danger" onClick={() => handleDelete(item._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='row justify-content-center'>
            <div className='col-md-12' style={{ marginTop: '20px',position:'relative',left:'30%',top:'50%'}}>
              <h4>Total Price:₹{totalPrice}</h4>
            </div>
            <div className='col-md-4' style={{ marginTop: '10px', textAlign: 'center',width:'50%' }}>
              <button className="btn btn-danger" onClick={handleClearAll}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div>
        <div className='row bg-black'>
            <div className='col-md-3' style={{textAlign:'center',}}>
                <img alt=''style={{height:'50px',margin:'40px'}} src='https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300' /><br/>
                <i className="fa-solid fa-location-crosshairs fa-1x" style={{color: '#ffffff',marginBottom:'10px'}}></i>
                <span style={{fontSize:'15px',color:'white'}}><b>Address:</b> Morampudi Road,Rajamahendravaram,533234</span><br/>
                <i className="fa-solid fa-envelope fa-1x" style={{color: '#ffffff',marginBottom:'10px'}}></i>
                <span style={{fontSize:'15px',color:'white'}}><b>E-Mail:</b> Shoppingmall@gmail.com</span><br/>
                <i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i>
                <span style={{fontSize:'15px',color:'white'}}> <b>Hours:</b>10:00, Mon-Sat</span><br/><br/>
                <i className="fa-brands fa-instagram fa-2x" style={{ color: '#ffffff',marginRight:'30px',fontSize:"25px"}}></i>
                <i className="fa-brands fa-facebook fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px"}}></i>
                <i className="fa-brands fa-twitter fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px" }}></i>
                <i className="fa-brands fa-linkedin fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px" }}></i>
                <i  className="fa-brands fa-youtube fa-2x" style={{ color: '#ffffff', marginRight:'25px' ,fontSize:"25px"}}></i><br/><br/><br/>
            </div>
            <div className='col-md-3 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{color:'white'}}>➤ Menu</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li style={{ margin: '8px 0' }}>About Us</li>
                    <li style={{ margin: '8px 0' }}>Delivery Information</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms & Conditions</li>
                    <li style={{ margin: '8px 0' }}>Contact Us</li>
                </ul>
            </div>  
            <div className='col-md-3 mt-5' style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
                <h4 style={{color:'white'}}>➤ Support</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li>Legal Policy</li>
                    <li style={{ margin: '8px 0' }}>Status Policy</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms of Service</li>
                    <li style={{ margin: '8px 0' }}>Customer</li>
                </ul>
            </div>
            <div className='col-md-3'>
                <h5 style={{color:'white',marginTop:'50px',marginRight:'50px'}}>➤ We Offered</h5>
                <ul style={{padding: '0px', color:'white',listStyleType:'none'  }}>
                    <li style={{ margin: '8px 0' }}>Mens wear</li>
                    <li style={{ margin: '8px 0' }}>Womens wear</li>
                    <li style={{ margin: '8px 0' }}>child wear</li>
                    <li style={{ margin: '8px 0' }}>Brand Products</li>
                </ul>
            </div>
            <div className='row'>
                <div className='col'>
                    <h6 style={{color:'white',textAlign:'center',marginBottom:'30px'}}>INFERNO Copyright © 2021 Inferno - All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>      
      </footer>
    </div>
  );
}
