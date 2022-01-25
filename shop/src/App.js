/* eslint-disable */
import React, { useContext, useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";
import Cart from "./Cart";
export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);
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
                <재고context.Provider value={재고}>
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Col shoes={shoes[i]} i={i} key={i} />;
                    })}
                  </div>
                </재고context.Provider>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        console.log(result.data);
                        shoes변경([...shoes, ...result.data]);
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
              <재고context.Provider value={재고}>
                <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
              </재고context.Provider>
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Col(props) {
  let 재고 = useContext(재고context);
  let history = useNavigate();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        history("/detail/" + (props.shoes.id));
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"
        }
        width="100%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      {재고[props.i]}
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
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
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
        <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
        <hr />
        <p>Go to My Website</p>
        <a href="#!" className="btn btn-primary">
          link
        </a>
      </div>
    </div>
  );
}
export default App;
