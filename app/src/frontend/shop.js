import { useState, useEffect } from "react";
import React from "react";
import {  female, male,New } from "./clothhdata";
import { Link } from "react-router-dom";
import './card.css';
import axios from "axios";
function Shop() {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getspares")
          .then((response) => {
            console.log(response.data.coursedata);
            setData(response.data.coursedata);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
      
    const addToCart = (item) => {
        axios
          .post('http://localhost:5000/addcart', item)
          .then((response) => {
            setCart([...cart, response.data]);
          })
          .catch((error) => {
            console.error('Error adding item to cart:', error);
          });
      };

    return (
    <div className="row" style={{backgroundColor:'#e3f3f6'}}>
        <div className="row" style={{color:'white',backgroundColor:'black'}}>
            <div className="col-md-6">
                <Link to='/home'><img src="https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300" alt="logo" 
                style={{height:'80px',width:'100px',float:'left',marginLeft:'100px',padding:'10px'}}></img></Link>
            </div>
            <div className="col-md-6" style={{marginTop:'10px'}}>
                <ul className="list" style={{ listStyleType: 'none', display: 'flex', justifyContent:'space-evenly'}}>
                    <li style={{marginTop:'20px',}}><a href="#men"style={{textDecoration:"none",fontFamily:'bold',fontSize:'20px',textShadow:'2px 2px 20px yellow,2px 2px 20px red'}} >Mens Wear</a></li>
                    <li style={{marginTop:'20px',}}><a href="#child"style={{textDecoration:"none",fontFamily:'bold',fontSize:'20px',textShadow:'2px 2px 20px yellow,2px 2px 20px red'}}>Kids Wear</a></li>
                    <li style={{marginTop:'20px',}}><a href="#female"style={{textDecoration:"none",fontFamily:'bold',fontSize:'20px',textShadow:'2px 2px 20px yellow,2px 2px 20px red'}}>women Wear</a></li>
                    <li style={{marginTop:'20px',}}><a href="#new"style={{textDecoration:"none",fontFamily:'bold',fontSize:'20px',textShadow:'2px 2px 20px yellow,2px 2px 20px red'}}>New Stock</a></li>
                    <Link to='/cart'style={{textDecoration:"none",marginTop:'20px',fontFamily:'bold',fontSize:'20px',textShadow:'2px 2px 20px yellow,2px 2px 20px red'}}><li>Cart</li></Link>
                </ul>
            </div>
        </div>

        <div className="row" id="men" style={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3' ,marginTop:'20px'}}>
            {male.map((item, index) => (
                <div key={index} className="col-md-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card" style={{ width: '90%', backgroundColor: '#f0f0f0', borderRadius: '20px', overflow: 'hidden', margin: '10px',border:'2px solid black' }}>
                        <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '300px', width: '100%' }} />
                        <div className="card-body" style={{  backgroundColor: 'black', borderRadius: '20 20 20px 20px', color: 'white', padding: '5px',textAlign:'center'}}>
                            <h5 className="card-text">{item.brand}</h5>
                            <p className="card-text">{item.name}</p>
                            <p className="card-price">Price: ₹{item.price}.00</p>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "white" }}></i><br/>
                            <button className="btn btn-primary " style={{marginLeft:'65px'}} onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
        <div className="row" id="female" style={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3' ,marginTop:'60px'}}>
            {female.map((item, index) => (
                <div key={index} className="col-md-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card" style={{ width: '90%', backgroundColor: '#f0f0f0', borderRadius: '20px', overflow: 'hidden', margin: '10px',border:'2px solid black' }}>
                        <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '300px', width: '100%' }} />
                        <div className="card-body" style={{  backgroundColor: 'black', borderRadius: '20 20 20px 20px', color: 'white', padding: '5px',textAlign:'center'}}>
                            <h5 className="card-text">{item.brand}</h5>
                            <p className="card-text">{item.name}</p>
                            <p className="card-price">Price: ₹{item.price}.00</p>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "white" }}></i><br/>
                            <button className="btn btn-primary " style={{marginLeft:'65px'}} onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="row" id="new"tyle={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3' ,marginTop:'60px'}}>
            {New.map((item, index) => (
                <div key={index} className="col-md-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card" style={{ width: '90%', backgroundColor: '#f0f0f0', borderRadius: '20px', overflow: 'hidden', margin: '10px',border:'2px solid black' }}>
                        <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '300px', width: '100%' }} />
                        <div className="card-body" style={{  backgroundColor: 'black', borderRadius: '20 20 20px 20px', color: 'white', padding: '5px',textAlign:'center'}}>
                            <h5 className="card-text">{item.brand}</h5>
                            <p className="card-text">{item.name}</p>
                            <p className="card-price">Price: ₹{item.price}.00</p>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "white" }}></i><br/>
                            <button className="btn btn-primary " style={{marginLeft:'65px'}} onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="row" id="child" style={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3' ,marginTop:'60px'}}>
            {data.map((item, index) => (
                <div key={index} className="col-md-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card" style={{ width: '90%', backgroundColor: '#f0f0f0', borderRadius: '20px', overflow: 'hidden', margin: '10px',border:'2px solid black' }}>
                        <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '300px', width: '100%' }} />
                        <div className="card-body" style={{  backgroundColor: 'black', borderRadius: '20 20 20px 20px', color: 'white', padding: '5px',textAlign:'center'}}>
                            <h5 className="card-text">{item.brand}</h5>
                            <p className="card-text">{item.name}</p>
                            <p className="card-price">Price: ₹{item.price}.00</p>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#CCCCCC" }}></i><br/>
                            <button className="btn btn-primary " style={{marginLeft:'65px'}} onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <footer>
            <div>
        <div className='row bg-black mt-3'>
            <div className='col-md-4' style={{textAlign:'center',}}>
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
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{color:'white'}}>Menu</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li style={{ margin: '8px 0' }}>About Us</li>
                    <li style={{ margin: '8px 0' }}>Delivery Information</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms & Conditions</li>
                    <li style={{ margin: '8px 0' }}>Contact Us</li>
                </ul>
            </div>  
            <div className='col-md-3 mt-5' style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
                <h4 style={{color:'white'}}>Support</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li>Legal Policy</li>
                    <li style={{ margin: '8px 0' }}>Status Policy</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms of Service</li>
                    <li style={{ margin: '8px 0' }}>Customer</li>
                </ul>
            </div>
            {/* <div className='col-md-2'>
                <h5 style={{color:'white',marginTop:'50px',marginRight:'100px'}}>We Offered</h5>
                <ul style={{padding: '0px', color:'white' }}>
                    <li style={{ margin: '8px 0' }}>Mens wear</li>
                    <li style={{ margin: '8px 0' }}>Womens wear</li>
                    <li style={{ margin: '8px 0' }}>child wear</li>
                    <li style={{ margin: '8px 0' }}>Brand Products</li>
                </ul>
            </div> */}
            <div className='row'>
                <div className='col'>
                    <h6 style={{color:'white',textAlign:'center',marginBottom:'30px'}}>INFERNO Copyright © 2021 Inferno - All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>      
            </footer>
        </div>
    </div>
        
    );
}
export default Shop;
