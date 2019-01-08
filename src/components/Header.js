import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header style={{background:'#eee', height:'50px',display:'flex', justifyContent:'space-around', lineHeight:'50px'}}> 
        <span style={{ width:'100px',border:'1px solid #fff'}}> Logo </span>
        <span style={{ display:'flex'}}>
            <span style={{ width:'100px',border:'1px solid #fff'}}> SignIn </span>
            <span style={{ width:'100px',border:'1px solid #fff'}}> Register </span>
        </span>
        </header>  
    )
  }
}
