import React, { Component } from 'react';
import './Footer.css'
import logo from '../../images/logo-new.png';
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="container-footer">
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <img className="img-fluid" src={logo}  alt="logo"/>
                  </div>
                  <div className="row">
                    <span style={{color: 'white'}}>Email:<a href="/">1613166@dlu.edu.vn</a></span>
                  </div>
                  <div className="row">
                    <p style={{color: 'white'}}>Copyright © 2015 Comic</p>
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <h4 style={{color: 'white'}}> Website info</h4>
                  </div>
                  <div className="row">
                    <a href="/">
                      <p>Điều khoản quy định</p>
                    </a>
                    &nbsp;
                    <a href="/">
                      <p>Liện hê với chúng tôi</p>
                    </a>
                    &nbsp;
                    <a href="/">
                      <p>Thông báo</p>
                    </a>
                    &nbsp;
                    <a href="/">
                      <p>Các vấn đề khác</p>
                    </a>
                  </div>
                </div>
              </div>
            </div></footer>
          
        );
    }
}

export default Footer;