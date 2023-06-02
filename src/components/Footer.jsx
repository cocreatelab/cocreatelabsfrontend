import React from 'react'
import './footer.css';
import footerlogo from '../assets/logomain.png';
import facebooklogo from '../assets/facebook.png';
import twitterlogo from '../assets/twitter.png';
import instalogo from '../assets/insta.png';
import linkdinlogo from '../assets/linkdin.png';
import rec1 from '../assets/Rectangle1.jpg';
import rec2 from '../assets/Rectangle2.jpg';
import ellipse1 from '../assets/Ellipse1.png';
import ellipse2 from '../assets/Ellipse2.png';
// import vector from '../assests/Vector.png';
const Footer = () => {
  return (
   <div className='footer'>
                <div className="Ellipse">
                    <img src={ellipse1} alt="" className="Ellipse"/>
                </div>
        <div className='sb-footer'>
            
            <div className='sb-footer-link'>
                
                 <div className='sb-footer-left contener'>
                    <div className='sb-footer-logo'>
                    <img src={footerlogo} alt="" className="footerlogo"/>
                    </div>
                    <div className='sb-footer-para'>
                        <p>We create digital experiences for brands and companies by using technology.</p>
                    </div>
                    <div className="sb-footer-newsletter">
                        <form className='newsletter'>
                            <input type="email" placeholder="Your email" className="email"/ >
                            <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
                 </div>
            
                <div className='sb-footer-link_div'>
                   <h4>Company</h4>
                   <a href="#/">
                     <p>About company</p> 
                   </a>
                   <a href='#/'>
                    <p>Company services</p> 
                   </a>
                   <a href='#/'>
                    <p>Job opportunities</p> 
                   </a>
                   <a href='#/'>
                    <p>Creative people</p> 
                   </a>
                </div>
                <div className='sb-footer-link_div'>
                    <h4>Customer</h4>
                    <a href='#/'>
                    <p>Client support</p> 
                    </a>
                    <a href='#/'>
                    <p>Latest news</p> 
                    </a>
                    <a href='#/'>
                    <p>Company story</p> 
                    </a>
                    <a href='#/'>
                    <p>Pricing packages</p> 
                    </a>
                </div>
                <div className='sb-footer-link-div'>
                    <h4>Latest blog</h4>
                    <div className="rec-container">
                        <div className="rec1">
                            <img src={rec1} alt="" className="rec-1"/>
                            <a href='#/'>
                            <p>I think really important to design with...</p> 
                            </a>
                        </div>
                        <div className="rec1">
                            <img src={rec2} alt="" className="rec-2"/>
                            <a href='#/'>
                                <p>Recognizing the need is the primary...</p> 
                            </a>
                        </div>
                    </div>
                </div>
            
            </div> 
            <br />
                <hr></hr>  
                <div className='sb-footer-bellow'>
                    <div className='sb-footer-bellow-left'>
                        <p>Privacy policy</p>
                        <p>Legal notice</p>
                        <p>Terms of service</p>
                    </div>
                    <div className='sb-footer-bellow-center'>
                        <p><img src={facebooklogo} alt="" className="facebooklogo"/></p>
                        <p><img src={twitterlogo} alt="" className="twitterlogo"/></p>
                        <p><img src={instalogo} alt="" className="instalogo"/></p>
                        <p><img src={linkdinlogo} alt="" className="linkdinlogo"/></p>
                    </div>
                    <div className='sb-footer-bellow-right'>
                        <p>
                            @Copyright{new Date().getFullYear()} -Co-Create Labs
                        </p>
                    </div>
                </div>
        </div>

                <div className="ellipse2">
                    <img src={ellipse2} alt="" className="ellipse2"/>
                </div>
    </div>


  )
}

export default Footer