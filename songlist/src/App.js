/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav, Form } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";

function App() {
  let [data, setData] = useState(Data);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavMain />
              <Jumbotron />
              <div className="container">
                <div className="row">
                  {data.map((a, i) => {
                    return <Col data={data[i]} i={i} key={i} />;
                  })}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    axios
                      .get(
                        process.env.REACT_APP_API_KEY
                      )
                      .then((result) => {
                        console.log(result.data.data);
                        setData([...data, ...result.data.data]);
                        console.log(data);
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }}
                >
                  더보기
                </button>
              </div>
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <div>
              <NavMain />
              <Detail data={data} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function Col(props) {
  let url = `/detail/${props.data.id}`;
  return (
    <div className="col-md-3">
      <Link to={url} style={{ textDecoration: "none", color: "black" }}>
        <img src={props.data.img} width="100%" alt="" />
        <h4>{props.data.저작물명}</h4>
        <p>{props.data.아티스트명}</p>
      </Link>
    </div>
  );
}

function NavMain() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbarFixed"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Playlist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Jumbotron() {
  return (
    <div className="container-fluid bg-light text-dark p-5 background">
      <div className="container bg-light p-5">
        <h1 className="display-4 fw-bold">플레이리스트 입니다.</h1>
        <hr />
        <p>My github</p>
        <a href="https://github.com/Hellol77" className="btn btn-primary">
          link
        </a>
      </div>
    </div>
  );
}
export default App;
