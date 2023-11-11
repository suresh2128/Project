import { useState} from "react";
import { Top } from "./clothhdata";
import axios from "axios";
import "./contact"
function Offeres(){
    const [cart, setCart] = useState([]);
      
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
    
    return(
        <div className="row yuvi mt-3">
              <div className="row"> 
                    <div className="col">
                      <h1 style={{width:'100%',textAlign:'center',padding:'50px',}}><i>#New Arravials</i></h1>
                    </div>
                </div>
                <div>
                <div>
             <div className="row " id="New" style={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'#e3e6f3'}}>
            {Top.map((item, index) => (
                <div key={index} className="col-md-3 mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
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
                            <i className="fa-solid fa-star" style={{ color: "#ffdd00" }}></i><br/>
                            <button className="btn btn-primary " style={{marginLeft:'65px'}}  onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
        </div>
                </div>
        </div>
    )
}
export default Offeres
