import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="container-fluid" style={{ padding: 0, width: '100%', position: 'fixed', background: '#e3f3f6', zIndex: 1000 }}>
      <div className="row">
        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src="https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300" alt="Logo" style={{ height: '60px', width: '100px', margin: '10px 20px',boxShadow: '5px 5px 10px black' }} />
          </Link>
        </div>
        <div className="col" style={{ display: 'flex',textDecoration:'none',justifyContent:'flex-end' }}>
          <ul style={{listStyleType:'none',display:'flex',direction:'column',margin:'20px'}}>
            <Link style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Home</li></Link>
            <Link to="/shop" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px',textDecoration:'none'}}>Shop</li></Link>
            <Link to="/contact" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>About</li></Link>
            <Link to="" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Contact</li></Link>
            <Link to="/cart"style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Cart</li></Link>
            <Link to="/login"><li>Login</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
