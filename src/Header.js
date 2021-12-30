import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HeadBlock = styled.div`
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 120px;
  border-bottom: 0.2px solid rgb(153, 153, 153);
  z-index: 5;
  background-color: white;
}

.menu {
  display: flex;
}

.logo{
  margin-bottom: 10px;
  margin-right: 40px;
}

.right {
  display: flex;
  margin-top: 7px;
}

.top-right {
  margin-top: 11px;
  margin-left: 50px;
}

.top-right .goodbox {
  margin-left: 10px;
}

.top-right .blog {
  margin-left: 10px;
}

.top-right .admin {
  margin-left: 10px;
}
`;

export default class Header extends Component {
    render () {
    return (
<HeadBlock>
  <Navbar bg="white" variant="white" className="header">
    <Container className="menu">
    <Navbar.Brand href="/Home" className="logo"><img src={require('./img/header_logo-top.png')} alt="로고"/></Navbar.Brand>
    <Nav className="me-auto">
      <div className="right">
        <Nav.Link href="/About"><img src={require('./img/header_about-us.png')} alt="로고"/></Nav.Link>
        <Nav.Link href="/Ourwork"><img src={require('./img/header_our-work.png')} alt="로고"/></Nav.Link>
        <Nav.Link href="/Portfolio"><img src={require('./img/header_portfolio.png')} alt="로고"/></Nav.Link>
        <Nav.Link href="/Contactus"><img src={require('./img/header_contact-us.png')} alt="로고"/></Nav.Link>
      </div>
      <div className="top-right">
                    <span className="tel"><img src={require('./img/header_tel.png')} alt="tel" /></span>
                    <a href="http://www.goodbox.co.kr/01_main" className="goodbox">
                      <img src={require('./img/header_goodbox.png')} alt="goodbox" /></a>
                    <a href="https://blog.naver.com/goodbox2015" className="blog">
                      <img src={require('./img/header_blog.png')} alt="blog" /></a>
                    <a href="./login.php" type="button" className="admin">admin</a>
      </div>
    </Nav>
    </Container>
  </Navbar>
</HeadBlock>
    );
   }
 }