import React from "react";
import './contact'

function Brand() {
  return (
    <div className="container-fluid bgh1" >
      <div className="row">
        <h1 className="col-md-12 text-center mt-3" style={{ backgroundColor:'',textShadow:' 5px 10px 15px #17647a',fontFamily:'serif'}}><i>FUN-TASTIC BRANDS</i></h1>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-around p-5 bg-light sur" >
          <img src="/br-9.jpeg" className="br rounded-circle" alt="Brand 1" />
          <img src="/br-4.jpeg" className="br rounded-circle" alt="Brand 2" />
          <img src="/br-5.jpeg" className="br rounded-circle" alt="Brand 3" />
          <img src="/br-6.jpeg" className="br rounded-circle" alt="Brand 4" />
          <img src="/br-10.jpeg" className="br rounded-circle" alt="Brand 5" />
          <img src="/br-8.jpeg" className="br rounded-circle" alt="Brand 6" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
