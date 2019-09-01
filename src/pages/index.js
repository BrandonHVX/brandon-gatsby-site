import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Side from "../components/side"
import Layout from "../components/layout"
import Aboutme from "../components/aboutme"
import Navbar from "../components/navBar"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {" "}
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="navi">
      <Navbar />
    </div>
    <Container>
      <div class="row collapse show no-gutters d-flex h-100 position-relative">
        <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex" />{" "}
        <div class="col px-3 px-md-0">
          <a
            data-toggle="collapse"
            href="#"
            data-target=".collapse"
            role="button"
            class="text-white p-1"
          >
            <i class="fa fa-bars fa-lg" />
          </a>
        </div>
      </div>
    </Container>
    <div class="container-fluid px-0">
      <div class="row collapse show no-gutters d-flex h-100 position-relative">
        <div class="col-3 p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
          <div class="navbar-dark bg-dark text-white position-fixed h-100 align-self-start w-sidebar">
            <Side />
          </div>{" "}
        </div>

        <div class="col p-3">
          <Aboutme />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
