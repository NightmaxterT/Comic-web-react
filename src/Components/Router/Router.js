import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Product from '../Product/Product';
import  './router.css';
import Details from '../Details/Details';
import readcomic from '../ReadComic/readcomic';

class routerURL extends Component {
    render() {
        return (
            <Router>
            <div className="background">
            <Route path="/" exact component={Product}></Route>
            <Route path="/Đọc-truyện/:comic/:chap" exact component={readcomic}></Route>
            <Route path="/Thông-tin-truyện/:name" exact component={Details}></Route>
            </div>
            </Router>
        );
    }
}

export default routerURL;