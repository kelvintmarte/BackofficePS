import React from "react";
import { Nav } from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateParkinglot from "./components/create-parkinglot.component";
import EditParkinglot from "./components/edit-parkinglot.component";
import ListParkinglot from "./components/parkinglot-list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-parking"} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-parking"} className="nav-link">
                    Create Parking
                  </Link>
                </Nav>

                {/* <Nav>
                <Link to={"/edit-parking/:id"} className="nav-link">
                  Edit Parking
                </Link>
              </Nav> */}

                <Nav>
                  <Link to={"/parking-list"} className="nav-link">
                    Parking List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// import Login from "./components/Login";
// import LoggedInPage from "./components/LoggedInPage";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (username, password) => {
//     // Simulación de lógica de autenticación
//     if (username === "usuario" && password === "contraseña") {
//       setIsLoggedIn(true);
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <LoggedInPage onLogin={handleLogin} />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;
