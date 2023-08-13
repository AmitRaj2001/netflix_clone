import React, { useState } from 'react';
import './Footer.scss'; 
import {Link} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {

    console.log(`Subscribed with email: ${email}`);
    
  };

  return (
    <footer className="footer">
      <div className="subscribe">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className="contact-info">
        <p>Feel free to reach out to us:</p>
        <p>Phone: 7891276245</p>
        <p>Email: amitraj7079@gmail.com</p>
      </div>
      <div className="social-icons">
        <p>Connect with us on social media:</p>
        <div className="social-links">
          <Link to="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjkxOTQ3NDQ0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D" className="social">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="social">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/accounts/login/" className="social">
            <FaInstagram />
          </Link>
          <Link to="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114791_asid.148989926303_crid.662526548049_kw.linkedin%20login_d.c_tid.kwd-12704307073_n.g_mt.p_geo.9300861&mcid=6844056167778418688&cid=&gclid=EAIaIQobChMI-b60hpTagAMVa5pmAh1legV2EAAYASAAEgK_yvD_BwE&gclsrc=aw.ds" className="social">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 YourCompany. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{' '}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
