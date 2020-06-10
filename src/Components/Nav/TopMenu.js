import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from './../../images/logo-new.png';
import Container from 'react-bootstrap/Container';
import './TopMenu.css';
import data from '../../data.json';


class TopMenu extends Component{

  constructor(){
    super();
    this.state={
      Search:[]
    }
  }
  onInput=()=>{
      let arrSearch=[];
      const key =this.refs.data_input.value.toLowerCase();
      for(let i of data){
        if(i.Name.toLowerCase().indexOf(key)>-1||i.NameCommon.toLowerCase().indexOf(key)>-1){
          arrSearch.push(i);
        }
       
      }
      if(key===""){
        return this.setState({
          Search:[]
        })
      }
      console.log(this.state.Search)
      return this.setState({
        Search:arrSearch
      })
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
      const {Search}=this.state;
        return(
          <Container>
          <Navbar collapseOnSelect expand="lg" className='design'>
          <Navbar.Brand href="/"><img src={logo} height={50} alt="logo-img"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className='home-icon'><i class="fas fa-home"></i></Nav.Link>
           
            <Nav.Link href="#pricing" className='balance first-link'>HOT</Nav.Link>
            <Nav.Link href="#pricing" className='balance'>THEO DÕI</Nav.Link>
            <Nav.Link href="#pricing" className='balance'>LỊCH SỬ</Nav.Link>

            <Nav.Link href="#pricing" className='balance'>GÓP Ý</Nav.Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 Search-comic" ref="data_input" onInput={()=>this.onInput()}/>
            
            <div className="suggestions">
                <ul>
                {
              Search?Search.map((item)=>{
                  return <a href={"Thông-tin-truyện/"+this.to_slug(item.NameCommon)} ><li>
                  <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-img">
                      <img src={item.Avatar} className="img-search"></img>
                    </div>
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-content">{item.Name}</div>
                    </div>
                    
                  </li>
                  </a>
              }): <div></div>
            }
                </ul>
            </div>
            
          </Form>
          </Navbar.Collapse>
        </Navbar>
        </Container>
        
        );
    }
}
export default TopMenu;