
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import AdminArea from './Components/AdminArea';
import { useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (

    <>
      <Router>


        <Navbar bg="dark" data-bs-theme="dark" style={{ marginBottom: 60 }}>
          <Container>
            <Navbar.Brand href="#home">Routing</Navbar.Brand>
            <Nav className="me-auto">

              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li><Link to='/category'>Category</Link></li>
                <li> <Link to='products'>Products</Link></li>
                <li>{isLoggedIn ?
                  <Link to='/admin'>Admin Area</Link>
                  : <button onClick={() => setIsLoggedIn(true)}>Login</button>}</li>

              </ul>

            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' to element={<Home />} />
          <Route path='/category' to element={<Category />} />
          <Route path='/products' to element={<Products />} />
          <Route
            path="/admin"
            element={isLoggedIn ? <AdminArea /> : <Navigate to="/" />}
          />
        </Routes>

      </Router>



    </>
  );
}

export default App;
