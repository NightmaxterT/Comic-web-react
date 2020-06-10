import React, { Component } from 'react';
import './readcomic.css';
import data from '../../data.json';


class readcomic extends Component {
  constructor(props){
    super(props);
    this.firstOption=React.createRef();
    this.state={
      chappter:""
    }
  }
  convertToNameCommon=(string)=>{
    return string.split("-").join(" ");
 }
 componentDidMount(){
  //  this.firstOption.current.style.display="none";
   this.setState({
    chappter:this.props.match.params.chap
   })
 }
 onClickChappter(index){
    window.location.href="/Đọc-truyện/"+this.props.match.params.comic+"/"+index;
 }
  
    render() {
      const {chappter}=this.state;
      const nameLink=this.convertToNameCommon(this.props.match.params.comic);
       const Comic= data.find((item)=>{
          if(item.NameCommon.toLowerCase()===nameLink){
            return item;
          }
        }) 
        const prev=Number(chappter)-1;
        const next =Number(chappter)+1;
        return (
            <div className="main">
            
            <div className="container">
              {/* noi dung*/}
              <div className="chapter-nav" style={{zIndex: 'auto', position: 'static', top: 'auto'}}>
                <a href={"/Đọc-truyện/"+this.props.match.params.comic+"/"+prev }className="prev"><i className="fa fa-angle-left" /></a>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle btn-chappter" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {"Chappter "+Number(chappter)}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    { Comic.Chappter.map((item,index)=>{
                                      return   <a className="dropdown-item" href={"/Đọc-truyện/"+this.props.match.params.comic+"/"+index}>{"Chappter "+index}</a>
                                  })}
                    </div>
                </div>
                
                <a href={"/Đọc-truyện/"+this.props.match.params.comic+"/"+next } className="next"><i className="fa fa-angle-right" /></a>
                <a className="follow-link btn btn-success"><i className="fa fa-heart" /> <span>Theo dõi</span></a></div><br />
              <div className="reading-detail">
              {
                Comic.Chappter.find((item,index)=>{
          if(index===Number(chappter)){
              return item;}}).map((item)=><div className="page-chapter">
                  <img alt={nameLink+"/Chappter-"+chappter} src={item}/>
                </div> )
              }
                
                   
                }
              
              </div>
            </div>
          </div>
          
        );
    }
  }

export default readcomic;