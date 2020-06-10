import React, { Component } from 'react';
import './Details.css'
import data from '../../data.json';
import {Link} from "react-router-dom";


class Details extends Component {
     convertToNameCommon=(string)=>{
        return string.split("-").join(" ");
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
    render() {
        const nameLink=this.convertToNameCommon(this.props.match.params.name);
        return (
            <div>
             {data.map((item)=>{
               if(item.NameCommon.toLowerCase()===nameLink){
                  
                  return <div className="main">
                <div className="container">
                    {/* noi dung*/}
                    <article id="item-detail">
                    <br />
                    <h1 className="title-detail">{item.Name}</h1>
                    <div className="detail-info">
                        <div className="row">
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-image">
                            <img src={item.Avatar} alt={item.Name+"-image"}/>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-info">
                            <ul className="list-info">
                            <li className="author row ">
                                <p className="name col-xs-4 alignment">
                                <i className="fa fa-user">
                                </i> Tác giả
                                </p>&ensp;
                                <p className="col-xs-8">{item.Author}</p>
                            </li>
                            <li className="author row">
                                <p className="name col-xs-4 alignment">
                                <i className="fa fa-rss">
                                </i> Tình trang truyện
                                </p>&ensp;
                                <p className="col-xs-8">{item.Status}</p>
                            </li>
                            <li className="kind row">
                                <p className="name col-xs-4 alignment">
                                <i className="fa fa-tags">
                                </i> Thể loại
                                </p>&ensp;
                                <p className="col-xs-8">
                                {item.Category.map((item)=>{
                                    return <a href="/">{" "+item}</a>
                                })}
                                </p>
                            </li>
                            <li className="row">
                                <p className="name col-xs-4 alignment">
                                <i className="fa fa-eye">
                                </i> Lượt xem
                                </p>&ensp;
                                <p className="col-xs-8">{item.View}</p>
                            </li>
                            </ul>
                            <div className="follow">
                            <Link className="follow-link btn btn-danger" to="/123">
                                <i className="fa fa-heart" /> 
                                <span>Theo dõi</span>
                            </Link>
                            </div>
                            <div className="read-action mrt10">
                            <a className="btn btn-warning mrb5" href="/"> Đọc truyện</a>
                            </div>
                        </div>
                        </div>
                        <br />
                        <div className="detail-content">
                        <h3 className="list-title">
                            <i className="fa fa-file-text-o">
                            </i> Nội dung
                        </h3>
                        <p className="shortened">{item.Summary}</p>
                        </div>
                        <div className="list-chapter" id="nt_listchapter">
                        <h2 className="list-title clearfix">
                            <i className="fa fa-list">
                            </i> Danh sách chương
                            <nav>
                            <ul>
                            {item.Chappter.map((item,index)=>{
                                    return <li className="row">
                                <div className="col-xs-5 chapter">
                                <Link to={"/Đọc-truyện/"+this.to_slug(nameLink)+"/"+index} >{"Chappter "+ index}></Link>
                                </div>
                                </li>
                                })}
                                
                            </ul>
                            </nav>
                        </h2></div>
                    </div></article>
                </div>
            </div>
               }
             })} 
             <br></br>
            </div>
            
        );
    }
}

export default Details;