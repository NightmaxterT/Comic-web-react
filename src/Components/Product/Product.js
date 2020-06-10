import React, { Component } from 'react';
import {Card, Button, CardImg, CardTitle, CardBody} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import data from '../../data.json';
import './Product.css';
import Slider from '../Slider/Silder';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {actGetComicAllRequest} from '../../actions/index';

class Product extends Component{

    componentDidMount(){
     
        this.props.GetcomicAll();
//   axios.get(`https://superheroapi.com/api/509072006433917/1/image`).then(res=>{
//     console.log(res.data);
//     this.setState({
//         comics:res.data
//     })
//   })
  
}
to_slug =(str)=>
{
// Chuyển hết sang chữ thường
str = str.toLowerCase();     

// xóa dấu
str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
str = str.replace(/(đ)/g, 'd');

// Xóa ký tự đặc biệt
str = str.replace(/([^0-9a-z-\s])/g, '');

// Xóa khoảng trắng thay bằng ký tự -
str = str.replace(/(\s+)/g, '-');

// xóa phần dự - ở đầu
str = str.replace(/^-+/g, '');

// xóa phần dư - ở cuối
str = str.replace(/-+$/g, '');

// return
return str;
}

    render(){
        
        const {comics}=this.props;
        return ( 
        <div>
              <div className="wrap-slider">
                    <Slider></Slider>
            </div>
            <Container className="clearFix">
                <div className="row ">
                    <h5>DANH SÁCH TRUYỆN&gt;</h5>
                </div>
                <Row>
                    {comics.map((item)=>{
                        return (
                        <Col sm='4' md='4' lg='3' xl='3' className="col-card">
                            <Card>
                                <CardImg top  height='230px' src={item.Avatar} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{item.Name}</CardTitle>
                               <Button><Link to={"Thông-tin-truyện/"+this.to_slug(item.NameCommon)}> Read</Link></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                }
                )}
            </Row>
        </Container>
        </div>)
    }
    
}
const mapStateToProps=state=>{
    return {
        comics:state.comicList
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        GetcomicAll:()=>{
            dispatch(actGetComicAllRequest());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Product);