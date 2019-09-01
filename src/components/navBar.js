import React from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"
import linked from "../images/linked.svg"
import twitter from "../images/twitter.svg"
import git from "../images/git.svg"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
const social = {
  width: 50,
  marginRight: "5px",
}
const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Gatsby React Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
            <p>Dummy Heading</p>
            <img src={Brandonpic} className="round-img" />
            <img src={linked} style={social} />
            <img src={twitter} style={social} />
            <img src={git} style={social} />
            <ul>
              <li>
                <Link to="/">About </Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>

              <li>
                <Link to="/resume"> Resume</Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Nav>
          <Nav className="ml-auto" />
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
