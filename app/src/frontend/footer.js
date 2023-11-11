import React from 'react'
export default function Foot() {
  return (
    <div>
        <footer>
      <div>
        <div className='row bg-black'>
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
                <h4 style={{color:'white'}}>➤ Menu</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li style={{ margin: '8px 0' }}>About Us</li>
                    <li style={{ margin: '8px 0' }}>Delivery Information</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms & Conditions</li>
                    <li style={{ margin: '8px 0' }}>Contact Us</li>
                </ul>
            </div>  
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
                <h4 style={{color:'white'}}>➤ Support</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li>Legal Policy</li>
                    <li style={{ margin: '8px 0' }}>Status Policy</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms of Service</li>
                    <li style={{ margin: '8px 0' }}>Customer</li>
                </ul>
            </div>
            {/* <div className='col-md-3'>
                <h5 style={{color:'white',marginTop:'50px',marginRight:'50px'}}>➤ We Offered</h5>
                <ul style={{padding: '0px', color:'white',listStyleType:'none'  }}>
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
)
}