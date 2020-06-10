import React, { Component } from 'react';
import data from '../../data.json';
import './Silder.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class Silder extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        this.setState({
            products:data
        })
    }

    render() {
        const {products}=this.state;
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 500 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 500, min: 0 },
              items: 2
            }
          };
        return (
            <div className="sub-slider">
            <div className="row ">
              <h5>TRUYỆN ĐỀ CỬ&gt;</h5>
            </div>
            <Carousel responsive={responsive} className="fix-img" itemClass="carousel-item-padding-40-px">
                
                {products.map((item)=>{
                    return  <img src={item.Avatar} className="d-block w-100" alt="../public/images/nguyenton.png" />
                })}
            </Carousel>;
            </div>
          
        );
    }
}

export default Silder;