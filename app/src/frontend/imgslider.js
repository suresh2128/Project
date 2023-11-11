import React from "react";
import { Link } from "react-router-dom";
function Img(){
  return(
    <div className="row img">
      <div className=" col shop"> 
      <h3 style={{color:'#088178'}}>Trade-in-offer</h3>
      <h2 style={{position:'relative',right:'600px'}}>Super value deals</h2>
      <h1 style={{color:'#088178',fontWeight:'700',fontSize:'50px'}}>On all products</h1>
      <p style={{fontWeight:'400',fontSize:'25px'}}>Save more with coupons & up to 70% off! </p>
      <Link to='/shop'><button style={{height:'50px',width:'150px',background:' lightpink',boxShadow:'0px 10px 15px #088178',border:'lightpink',color:'#088178'}}><b>Shop Now</b></button></Link>
      </div>
    </div>
  )
}
export default Img;
