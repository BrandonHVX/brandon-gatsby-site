import React, { useState } from "react"
import {
  Card,
  Row,
  Nav,
  Tab,
  Col,
  Container,
  Jumbotron,
  Button,
} from "react-bootstrap"

const nav = {
  borderColor: "#00387d",

  textAlign: "center",
}

const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px",
}

const jumbo = {
  backgroundColor: "transparent ",
}

const navtabs = {
  display: "flex",
  justifyContent: "center",
}

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1")
  return (
    <Container>
      <Jumbotron style={jumbo}>
        {" "}
        <h1>Projects</h1>
        <p>
          I'm a software engineer specialised in frontend and backend
          development for complex scalable web apps. I write about software
          development on my blog. Want to know how I may help your project?
          Check out my project portfolio and online resume.
        </p>
      </Jumbotron>
      <div style={text}>
        <Tab.Container defaultActiveKey="first">
          <Nav variant="pills" style={navtabs}>
            <Nav.Item>
              <Nav.Link eventKey="first">Web Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Video Production</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Digital Design</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Motion Graphics</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">Hello</Tab.Pane>
            <Tab.Pane eventKey="second">Hello 2</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Container>
  )
}
