import React, { useState,useEffect } from 'react';
import axios from "axios";
import './card.css';
function Cardtype() {
    const [cart, setCart] = useState([]);
    const [data,setData] =useState([]);
    const addToCart = (item) => {
        axios
          .post('http://localhost:5000/addToCart', item)
          .then((response) => {
            setCart([...cart, response.data]);
          })
          .catch((error) => {
            console.error('Error adding item to cart:', error);
          });
      };
    

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
        
    return (
        <div className="row" id="child" style={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3' ,marginTop:'0px'}}>
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
    );
}
export default Cardtype;
